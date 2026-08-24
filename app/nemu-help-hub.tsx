'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { ArrowRight, CalendarPlus, Check, MessageCircle, Send, Sparkles, Star, X } from 'lucide-react';

type ChatMessage = { role: 'nemu' | 'user'; text: string };

const quickQuestions = ['NEMU itu apa?', 'Aku mau belanja', 'Aku mau jualan'];

function getNemuAnswer(question: string) {
  const text = question.toLowerCase();
  if (text.includes('jual') || text.includes('seller') || text.includes('toko')) return 'Bisa banget. Kamu langsung dapat website toko, bantuan foto dan konten AI, iklan Google–Meta–TikTok, pembayaran DOKU, dan 30+ pilihan kurir. Gratis sampai penjualan pertama, lalu Rp199 ribu/bulan.';
  if (text.includes('belanja') || text.includes('barang') || text.includes('cari')) return 'Kamu bisa cari seperti biasa di Shop. Kalau belum tahu nama barangnya, bilang kebutuhan dan budgetmu di Mode AI—NEMU bantu nyaring pilihan yang paling masuk.';
  if (text.includes('harga') || text.includes('biaya')) return 'Buat seller, mulai Rp0 sampai pecah telur. Setelah ada penjualan pertama, lanjut Rp199 ribu/bulan.';
  return 'NEMU adalah tempat buat cari barang sekaligus buka channel jualan. Buyer dibantu menemukan produk; seller dibantu punya toko, bikin konten, pasang iklan, menerima pembayaran, dan mengatur kiriman.';
}

function googleDate(date: string, time: string, offsetMinutes = 0) {
  const value = new Date(`${date}T${time}:00+07:00`);
  value.setMinutes(value.getMinutes() + offsetMinutes);
  return value.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

export function NemuHelpHub() {
  const [chatOpen, setChatOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [rating, setRating] = useState(0);
  const [interest, setInterest] = useState('');
  const [comment, setComment] = useState('');
  const [onboardingDate, setOnboardingDate] = useState('');
  const [onboardingTime, setOnboardingTime] = useState('10:00');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'nemu', text: 'Hai! Ada yang mau ditanyain soal belanja atau jualan di NEMU?' },
  ]);

  const calendarUrl = useMemo(() => {
    if (!onboardingDate || !onboardingTime) return '#';
    const dates = `${googleDate(onboardingDate, onboardingTime)}/${googleDate(onboardingDate, onboardingTime, 45)}`;
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: 'Onboarding NEMU',
      dates,
      details: 'Kenalan singkat dengan NEMU, lihat alur buka toko, dan bahas kebutuhan jualanmu. Website: https://nemu-ai.com/',
      location: 'Google Meet — link menyusul dari tim NEMU',
      ctz: 'Asia/Jakarta',
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }, [onboardingDate, onboardingTime]);

  useEffect(() => {
    let armed = false;
    const timer = window.setTimeout(() => { armed = true; }, 8000);
    const onExitIntent = (event: MouseEvent) => {
      if (!armed || event.clientY > 10 || event.relatedTarget || sessionStorage.getItem('nemu-feedback-seen')) return;
      sessionStorage.setItem('nemu-feedback-seen', 'true');
      setChatOpen(false);
      setFeedbackOpen(true);
    };
    const rememberLeave = () => {
      if (document.visibilityState === 'hidden') sessionStorage.setItem('nemu-left-at', String(Date.now()));
    };
    const onReturn = () => {
      const leftAt = Number(sessionStorage.getItem('nemu-left-at') || 0);
      if (!leftAt || Date.now() - leftAt < 1200 || sessionStorage.getItem('nemu-return-feedback-seen')) return;
      sessionStorage.setItem('nemu-return-feedback-seen', 'true');
      setChatOpen(false);
      setFeedbackOpen(true);
    };
    document.addEventListener('mouseout', onExitIntent);
    document.addEventListener('visibilitychange', rememberLeave);
    window.addEventListener('focus', onReturn);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('mouseout', onExitIntent);
      document.removeEventListener('visibilitychange', rememberLeave);
      window.removeEventListener('focus', onReturn);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setChatOpen(false);
      setFeedbackOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const ask = (question: string) => {
    const clean = question.trim();
    if (!clean) return;
    setMessages((current) => [...current, { role: 'user', text: clean }, { role: 'nemu', text: getNemuAnswer(clean) }]);
    setInput('');
  };

  const submitChat = (event: FormEvent) => {
    event.preventDefault();
    ask(input);
  };

  const submitFeedback = (event: FormEvent) => {
    event.preventDefault();
    if (!rating || !interest || (interest !== 'no' && (!onboardingDate || !onboardingTime))) return;
    sessionStorage.setItem('nemu-feedback-submitted', JSON.stringify({ rating, interest, comment, onboardingDate, onboardingTime }));
    setFeedbackSent(true);
  };

  const needsSchedule = interest === 'yes' || interest === 'maybe';

  return (
    <>
      <div className="nemu-chat-launcher">
        <span className="nemu-chat-nudge">Ada yang mau ditanyain?</span>
        <button aria-expanded={chatOpen} aria-label={chatOpen ? 'Tutup chat NEMU' : 'Tanya NEMU'} className="nemu-chat-button" onClick={() => setChatOpen((open) => !open)} type="button">
          {chatOpen ? <X size={22}/> : <><MessageCircle size={21}/><span>Tanya NEMU</span></>}
        </button>
      </div>

      {chatOpen && (
        <section aria-label="Chat Tanya NEMU" className="nemu-chat-panel" role="dialog">
          <header className="nemu-chat-header">
            <span className="nemu-chat-avatar"><Sparkles size={18}/></span>
            <div><b>Tanya NEMU</b><small><i/> Siap bantu</small></div>
            <button aria-label="Tutup chat" onClick={() => setChatOpen(false)} type="button"><X size={18}/></button>
          </header>
          <div aria-live="polite" className="nemu-chat-messages">
            {messages.map((message, index) => <p className={`nemu-message nemu-message-${message.role}`} key={`${message.role}-${index}`}>{message.text}</p>)}
          </div>
          <div className="nemu-quick-questions">{quickQuestions.map((question) => <button key={question} onClick={() => ask(question)} type="button">{question}</button>)}</div>
          <form className="nemu-chat-form" onSubmit={submitChat}>
            <label className="sr-only" htmlFor="nemu-chat-input">Tulis pertanyaan</label>
            <input id="nemu-chat-input" onChange={(event) => setInput(event.target.value)} placeholder="Tulis pertanyaanmu..." value={input}/>
            <button aria-label="Kirim pertanyaan" disabled={!input.trim()} type="submit"><Send size={17}/></button>
          </form>
        </section>
      )}

      {feedbackOpen && (
        <div className="nemu-feedback-backdrop" role="presentation">
          <section aria-labelledby="feedback-title" aria-modal="true" className="nemu-feedback-card" role="dialog">
            <button aria-label="Tutup feedback" className="nemu-feedback-close" onClick={() => setFeedbackOpen(false)} type="button"><X size={19}/></button>
            {feedbackSent ? (
              <div className="nemu-feedback-thanks">
                <span><Check size={24}/></span>
                <p>Makasih, masukannya kepakai banget.</p>
                {needsSchedule && <><small>Onboarding pilihanmu: {onboardingDate} · {onboardingTime} WIB</small><a href={calendarUrl} rel="noreferrer" target="_blank"><CalendarPlus size={17}/> Masukkan ke Google Calendar</a></>}
                <button onClick={() => setFeedbackOpen(false)} type="button">Lanjut lihat NEMU <ArrowRight size={15}/></button>
              </div>
            ) : (
              <form onSubmit={submitFeedback}>
                <span className="nemu-feedback-kicker"><Sparkles size={14}/> Sebelum pergi...</span>
                <h2 id="feedback-title">Menurutmu halaman ini gimana?</h2>
                <p className="nemu-feedback-copy">Kasih nilai jujur. Biar tampilan NEMU makin gampang dipahami.</p>
                <fieldset>
                  <legend>Nilai desainnya</legend>
                  <div className="nemu-star-row">{[1,2,3,4,5].map((star) => <button aria-label={`${star} bintang`} className={star <= rating ? 'is-active' : ''} key={star} onClick={() => setRating(star)} type="button"><Star fill="currentColor" size={25}/></button>)}</div>
                </fieldset>
                <fieldset>
                  <legend>Tertarik pakai NEMU?</legend>
                  <div className="nemu-interest-row">{[['yes','Iya, tertarik'],['maybe','Mau lihat dulu'],['no','Belum cocok']].map(([value,label]) => <button className={interest === value ? 'is-active' : ''} key={value} onClick={() => setInterest(value)} type="button">{label}</button>)}</div>
                </fieldset>
                {needsSchedule && <div className="nemu-schedule-fields"><p><CalendarPlus size={15}/> Mau onboarding kapan?</p><label>Tanggal<input min={new Date().toISOString().slice(0, 10)} onChange={(event) => setOnboardingDate(event.target.value)} required type="date" value={onboardingDate}/></label><label>Jam WIB<input onChange={(event) => setOnboardingTime(event.target.value)} required type="time" value={onboardingTime}/></label></div>}
                <label className="nemu-feedback-label" htmlFor="nemu-feedback-comment">Yang perlu dibagusin? <span>Opsional</span></label>
                <textarea id="nemu-feedback-comment" onChange={(event) => setComment(event.target.value)} placeholder="Tulis singkat aja..." rows={3} value={comment}/>
                <button className="nemu-feedback-submit" disabled={!rating || !interest || (needsSchedule && (!onboardingDate || !onboardingTime))} type="submit">Kirim masukan <ArrowRight size={16}/></button>
              </form>
            )}
          </section>
        </div>
      )}
    </>
  );
}
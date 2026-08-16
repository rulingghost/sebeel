import React from 'react';
import ImageUploadField from '../ImageUploadField';
import PageSelector from '../PageSelector';
import { Sparkles, Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

const HeroTab = ({ content, onChange }) => {
  const hero = content.hero || { slides: [] };
  const slides = hero.slides || [];

  const updateHero = (newHero) => {
    onChange({
      ...content,
      hero: newHero
    });
  };

  const updateSlide = (index, field, value) => {
    const newSlides = [...slides];
    newSlides[index] = {
      ...newSlides[index],
      [field]: value
    };
    updateHero({ ...hero, slides: newSlides });
  };

  const updateSlideStat = (slideIndex, statIndex, field, value) => {
    const newSlides = [...slides];
    const stats = newSlides[slideIndex].stats ? [...newSlides[slideIndex].stats] : [];
    if (!stats[statIndex]) {
      stats[statIndex] = { value: '', label: '' };
    }
    stats[statIndex] = {
      ...stats[statIndex],
      [field]: value
    };
    newSlides[slideIndex].stats = stats;
    updateHero({ ...hero, slides: newSlides });
  };

  const addSlide = () => {
    const newSlide = {
      id: `slide-${Date.now()}`,
      badge: 'Yeni Teknoloji',
      title: 'Geleceğin Dijital Çözümleri',
      subtitle: 'Modern mimariler ve yüksek performanslı uygulamalarla işinizi büyütün.',
      primaryButton: 'Hemen Başlayın',
      primaryButtonUrl: '#services',
      secondaryButton: 'İletişime Geçin',
      secondaryButtonUrl: '#contact',
      icon: 'Smartphone',
      image: '',
      theme: 'blue',
      stats: [
        { label: 'Yüksek Hız', value: '10x Performans' },
        { label: 'Gelişmiş Mimari', value: 'Modern Altyapı' }
      ],
      badge1Text: 'Özel Çözümler',
      badge2Text: 'App Store Ready'
    };
    updateHero({ ...hero, slides: [...slides, newSlide] });
  };

  const removeSlide = (index) => {
    if (slides.length <= 1) {
      alert('En az 1 adet ana sayfa slaytı bulunmalıdır.');
      return;
    }
    if (window.confirm('Bu slaytı silmek istediğinize emin misiniz?')) {
      const newSlides = slides.filter((_, i) => i !== index);
      updateHero({ ...hero, slides: newSlides });
    }
  };

  const moveSlide = (index, direction) => {
    const target = index + direction;
    if (target < 0 || target >= slides.length) return;
    const newSlides = [...slides];
    const temp = newSlides[index];
    newSlides[index] = newSlides[target];
    newSlides[target] = temp;
    updateHero({ ...hero, slides: newSlides });
  };

  return (
    <div className="admin-tab-content">
      <div className="tab-header">
        <div className="tab-icon-box">
          <Sparkles size={22} />
        </div>
        <div>
          <h2>Hero Bölümü ve Slayt Yönetimi</h2>
          <p>Ana sayfadaki dinamik slider alanını, başlıkları, buton yönlendirmelerini ve görselleri düzenleyin.</p>
        </div>
      </div>

      <div className="admin-card">
        <div className="card-header-flex">
          <div>
            <h3 className="card-title">Slider Slaytları ({slides.length})</h3>
            <p className="admin-helper-text">Ana sayfada sırayla otomatik dönen slaytlar.</p>
          </div>
          <button type="button" onClick={addSlide} className="btn-secondary">
            <Plus size={16} /> Yeni Slayt Ekle
          </button>
        </div>

        <div className="slides-container">
          {slides.map((slide, index) => (
            <div key={slide.id || index} className="slide-editor-card glass-panel">
              <div className="slide-card-header">
                <div className="slide-badge-title">
                  <span className="slide-num">#{index + 1}</span>
                  <span className="slide-name">{slide.title || 'İsimsiz Slayt'}</span>
                  <span className={`theme-pill theme-${slide.theme || 'blue'}`}>{slide.theme || 'blue'}</span>
                </div>

                <div className="slide-actions">
                  <button
                    type="button"
                    onClick={() => moveSlide(index, -1)}
                    disabled={index === 0}
                    className="btn-icon"
                    title="Öne Taşı"
                  >
                    <ChevronUp size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => moveSlide(index, 1)}
                    disabled={index === slides.length - 1}
                    className="btn-icon"
                    title="Sonraya Taşı"
                  >
                    <ChevronDown size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => removeSlide(index)}
                    className="btn-delete"
                    title="Slaytı Sil"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <div className="slide-form-grid">
                <div className="form-grid-2">
                  <div className="admin-field-group">
                    <label className="admin-label">Üst Rozet (Badge)</label>
                    <input
                      type="text"
                      value={slide.badge || ''}
                      onChange={(e) => updateSlide(index, 'badge', e.target.value)}
                      className="admin-input"
                      placeholder="Yenilikçi Çözümler"
                    />
                  </div>
                  <div className="admin-field-group">
                    <label className="admin-label">Tema Rengi</label>
                    <select
                      value={slide.theme || 'blue'}
                      onChange={(e) => updateSlide(index, 'theme', e.target.value)}
                      className="admin-input"
                    >
                      <option value="blue">Mavi (Blue Neon)</option>
                      <option value="gold">Altın / Turuncu (Gold Glow)</option>
                      <option value="rose">Pembe / Gül (Rose Sunset)</option>
                      <option value="emerald">Yeşil (Emerald Tech)</option>
                      <option value="purple">Mor (Purple Cyber)</option>
                    </select>
                  </div>
                </div>

                <div className="admin-field-group">
                  <label className="admin-label">Ana Başlık (Slogan)</label>
                  <input
                    type="text"
                    value={slide.title || ''}
                    onChange={(e) => updateSlide(index, 'title', e.target.value)}
                    className="admin-input"
                    placeholder="Dijital Dönüşümün Zirvesi"
                  />
                  <small className="admin-helper-text">Başlığın son iki kelimesi otomatik gradient rengine boyanır.</small>
                </div>

                <div className="admin-field-group">
                  <label className="admin-label">Alt Açıklama (Subtitle)</label>
                  <textarea
                    rows={2}
                    value={slide.subtitle || ''}
                    onChange={(e) => updateSlide(index, 'subtitle', e.target.value)}
                    className="admin-input"
                    placeholder="Kullanıcı deneyimini merkeze alan..."
                  />
                </div>

                <div className="form-grid-2">
                  <div className="admin-field-group">
                    <label className="admin-label">1. Buton (Primary)</label>
                    <input
                      type="text"
                      value={slide.primaryButton || ''}
                      onChange={(e) => updateSlide(index, 'primaryButton', e.target.value)}
                      className="admin-input mb-1"
                      placeholder="Projenizi Başlatın"
                    />
                    <PageSelector
                      value={slide.primaryButtonUrl || '#services'}
                      onChange={(val) => updateSlide(index, 'primaryButtonUrl', val)}
                      placeholder="#services veya /iletisim"
                    />
                  </div>

                  <div className="admin-field-group">
                    <label className="admin-label">2. Buton (Secondary)</label>
                    <input
                      type="text"
                      value={slide.secondaryButton || ''}
                      onChange={(e) => updateSlide(index, 'secondaryButton', e.target.value)}
                      className="admin-input mb-1"
                      placeholder="Referanslarımız"
                    />
                    <PageSelector
                      value={slide.secondaryButtonUrl || '#contact'}
                      onChange={(val) => updateSlide(index, 'secondaryButtonUrl', val)}
                      placeholder="#contact veya /projelerimiz"
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="admin-field-group">
                    <label className="admin-label">İkon Tipi</label>
                    <select
                      value={slide.icon || 'Smartphone'}
                      onChange={(e) => updateSlide(index, 'icon', e.target.value)}
                      className="admin-input"
                    >
                      <option value="Smartphone">Smartphone (Mobil Telefon)</option>
                      <option value="Shield">Shield (Güvenlik / Kalkan)</option>
                      <option value="Radio">Radio (Canlı Yayın / Dalga)</option>
                      <option value="Sparkles">Sparkles (Yıldızlar / AI)</option>
                      <option value="Zap">Zap (Yıldırım / Hız)</option>
                      <option value="Globe">Globe (Dünya / Global)</option>
                      <option value="Gamepad2">Gamepad2 (Oyun Kolu)</option>
                    </select>
                  </div>

                  <div className="admin-field-group">
                    <label className="admin-label">Yüzen Rozetler (Floating Badges)</label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input
                        type="text"
                        value={slide.badge1Text || 'Özel Çözümler'}
                        onChange={(e) => updateSlide(index, 'badge1Text', e.target.value)}
                        className="admin-input"
                        placeholder="1. Rozet"
                      />
                      <input
                        type="text"
                        value={slide.badge2Text || 'App Store Ready'}
                        onChange={(e) => updateSlide(index, 'badge2Text', e.target.value)}
                        className="admin-input"
                        placeholder="2. Rozet"
                      />
                    </div>
                  </div>
                </div>

                <div className="stats-edit-section">
                  <label className="admin-label">Slayt İstatistik / Özellik Kutuları</label>
                  <div className="form-grid-2">
                    <div className="stat-edit-box">
                      <input
                        type="text"
                        value={slide.stats?.[0]?.value || ''}
                        onChange={(e) => updateSlideStat(index, 0, 'value', e.target.value)}
                        className="admin-input mb-1"
                        placeholder="Değer (Örn: UX/UI Tasarım)"
                      />
                      <input
                        type="text"
                        value={slide.stats?.[0]?.label || ''}
                        onChange={(e) => updateSlideStat(index, 0, 'label', e.target.value)}
                        className="admin-input"
                        placeholder="Etiket (Örn: Kullanıcı Odaklı)"
                      />
                    </div>

                    <div className="stat-edit-box">
                      <input
                        type="text"
                        value={slide.stats?.[1]?.value || ''}
                        onChange={(e) => updateSlideStat(index, 1, 'value', e.target.value)}
                        className="admin-input mb-1"
                        placeholder="Değer (Örn: Modern Altyapı)"
                      />
                      <input
                        type="text"
                        value={slide.stats?.[1]?.label || ''}
                        onChange={(e) => updateSlideStat(index, 1, 'label', e.target.value)}
                        className="admin-input"
                        placeholder="Etiket (Örn: Genişletilebilir)"
                      />
                    </div>
                  </div>
                </div>

                <ImageUploadField
                  label="Özel Slayt Görseli / Mockup (Opsiyonel)"
                  helperText="Boş bırakılırsa temaya uygun 3D mockup arayüzü gösterilir."
                  value={slide.image || ''}
                  onChange={(url) => updateSlide(index, 'image', url)}
                  placeholder="https://... veya dosya yükleyin"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroTab;

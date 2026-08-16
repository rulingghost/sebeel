import React from 'react';
import { Briefcase, Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

const CareersTab = ({ content, onChange }) => {
  const careers = content.careers || {};
  const jobs = careers.jobs || [];

  const updateCareers = (newCareers) => {
    onChange({
      ...content,
      careers: newCareers
    });
  };

  const handleHeaderChange = (field, value) => {
    updateCareers({
      ...careers,
      [field]: value
    });
  };

  const updateJob = (index, field, value) => {
    const newJobs = [...jobs];
    newJobs[index] = {
      ...newJobs[index],
      [field]: value
    };
    updateCareers({
      ...careers,
      jobs: newJobs
    });
  };

  const addJob = () => {
    const newJob = {
      id: `job-${Date.now()}`,
      title: 'Yeni Açık Pozisyon',
      type: 'Tam Zamanlı',
      location: 'Hibrit / İstanbul',
      department: 'Yazılım',
      timeText: 'Yeni İlan'
    };
    updateCareers({
      ...careers,
      jobs: [...jobs, newJob]
    });
  };

  const removeJob = (index) => {
    updateCareers({
      ...careers,
      jobs: jobs.filter((_, i) => i !== index)
    });
  };

  const moveJob = (index, direction) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= jobs.length) return;
    const newJobs = [...jobs];
    const temp = newJobs[index];
    newJobs[index] = newJobs[newIndex];
    newJobs[newIndex] = temp;
    updateCareers({
      ...careers,
      jobs: newJobs
    });
  };

  return (
    <div className="admin-tab-content">
      <div className="tab-header">
        <div className="tab-icon-box">
          <Briefcase size={22} />
        </div>
        <div>
          <h2>Kariyer ve Açık Pozisyonlar Yönetimi</h2>
          <p>/kariyer sayfasındaki başlıkları ve iş ilanlarını yönetin.</p>
        </div>
      </div>

      {/* Header Info */}
      <div className="admin-card">
        <h3 className="card-title">Kariyer Sayfası Başlığı</h3>
        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">Ana Başlık</label>
            <input
              type="text"
              value={careers.title || ''}
              onChange={(e) => handleHeaderChange('title', e.target.value)}
              className="admin-input"
              placeholder="Geleceği Birlikte"
            />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Vurgulu Başlık</label>
            <input
              type="text"
              value={careers.titleHighlight || ''}
              onChange={(e) => handleHeaderChange('titleHighlight', e.target.value)}
              className="admin-input"
              placeholder="Kodlayalım"
            />
          </div>
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Alt Açıklama Metni</label>
          <textarea
            rows={2}
            value={careers.subtitle || ''}
            onChange={(e) => handleHeaderChange('subtitle', e.target.value)}
            className="admin-input"
            placeholder="Teknolojinin sınırlarını zorlayan..."
          />
        </div>

        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">Pozisyonlar Bölüm Başlığı</label>
            <input
              type="text"
              value={careers.positionsTitle || ''}
              onChange={(e) => handleHeaderChange('positionsTitle', e.target.value)}
              className="admin-input"
              placeholder="Açık Pozisyonlar"
            />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Başvuru E-Posta Adresi</label>
            <input
              type="email"
              value={careers.applyEmail || ''}
              onChange={(e) => handleHeaderChange('applyEmail', e.target.value)}
              className="admin-input"
              placeholder="kariyer@seebelyazilim.com"
            />
          </div>
        </div>
      </div>

      {/* Jobs List */}
      <div className="admin-card">
        <div className="card-header-flex">
          <div>
            <h3 className="card-title">İlan Listesi ({jobs.length})</h3>
            <p className="admin-helper-text">İlanların sırasını yukarı/aşağı butonları ile düzenleyebilirsiniz.</p>
          </div>
          <button type="button" onClick={addJob} className="btn-secondary">
            <Plus size={16} /> Yeni İlan Ekle
          </button>
        </div>

        <div className="items-list">
          {jobs.map((job, index) => (
            <div key={job.id || index} className="service-editor-card glass-panel">
              <div className="service-editor-header">
                <div className="service-badge-info">
                  <div className="item-order-controls">
                    <button
                      type="button"
                      onClick={() => moveJob(index, -1)}
                      disabled={index === 0}
                      className="btn-icon"
                      title="Yukarı Taşı"
                    >
                      <ChevronUp size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => moveJob(index, 1)}
                      disabled={index === jobs.length - 1}
                      className="btn-icon"
                      title="Aşağı Taşı"
                    >
                      <ChevronDown size={16} />
                    </button>
                  </div>
                  <span className="slide-title-preview">{job.title || 'İsimsiz Pozisyon'}</span>
                  <span className="order-number">({job.type || 'Tam Zamanlı'} - {job.location || 'Konum Yok'})</span>
                </div>

                <button
                  type="button"
                  onClick={() => removeJob(index)}
                  className="btn-delete"
                  title="İlanı Sil"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="form-grid-2">
                <div className="admin-field-group">
                  <label className="admin-label">Pozisyon Başlığı</label>
                  <input
                    type="text"
                    value={job.title || ''}
                    onChange={(e) => updateJob(index, 'title', e.target.value)}
                    className="admin-input"
                    placeholder="Örn: Senior React Native Developer"
                  />
                </div>
                <div className="admin-field-group">
                  <label className="admin-label">Çalışma Şekli</label>
                  <input
                    type="text"
                    value={job.type || ''}
                    onChange={(e) => updateJob(index, 'type', e.target.value)}
                    className="admin-input"
                    placeholder="Tam Zamanlı / Uzaktan / Hibrit"
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="admin-field-group">
                  <label className="admin-label">Lokasyon</label>
                  <input
                    type="text"
                    value={job.location || ''}
                    onChange={(e) => updateJob(index, 'location', e.target.value)}
                    className="admin-input"
                    placeholder="Hibrit / İstanbul / Uzaktan"
                  />
                </div>
                <div className="admin-field-group">
                  <label className="admin-label">Departman / Kategori</label>
                  <input
                    type="text"
                    value={job.department || ''}
                    onChange={(e) => updateJob(index, 'department', e.target.value)}
                    className="admin-input"
                    placeholder="Mobil Geliştirme / Tasarım"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareersTab;

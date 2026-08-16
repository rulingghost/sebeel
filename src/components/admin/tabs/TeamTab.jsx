import React from 'react';
import { Users, Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';
import ImageUploadField from '../ImageUploadField';

const TeamTab = ({ content, onChange }) => {
  const team = content.team || {};
  const members = team.members || [];

  const updateTeam = (newTeam) => {
    onChange({
      ...content,
      team: newTeam
    });
  };

  const handleHeaderChange = (field, value) => {
    updateTeam({
      ...team,
      [field]: value
    });
  };

  const updateMember = (index, field, value) => {
    const newMembers = [...members];
    newMembers[index] = {
      ...newMembers[index],
      [field]: value
    };
    updateTeam({
      ...team,
      members: newMembers
    });
  };

  const addMember = () => {
    const newMember = {
      id: `tm-${Date.now()}`,
      name: 'Yeni Ekip Üyesi',
      role: 'Yazılım Uzmanı',
      image: 'https://i.pravatar.cc/150?img=60',
      website: '#',
      twitter: '#',
      email: 'member@seebelyazilim.com'
    };
    updateTeam({
      ...team,
      members: [...members, newMember]
    });
  };

  const removeMember = (index) => {
    updateTeam({
      ...team,
      members: members.filter((_, i) => i !== index)
    });
  };

  const moveMember = (index, direction) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= members.length) return;
    const newMembers = [...members];
    const temp = newMembers[index];
    newMembers[index] = newMembers[newIndex];
    newMembers[newIndex] = temp;
    updateTeam({
      ...team,
      members: newMembers
    });
  };

  return (
    <div className="admin-tab-content">
      <div className="tab-header">
        <div className="tab-icon-box">
          <Users size={22} />
        </div>
        <div>
          <h2>Ekibimiz Sayfası Yönetimi</h2>
          <p>/ekibimiz sayfasındaki başlıkları ve ekip üyelerini yönetin.</p>
        </div>
      </div>

      {/* Page Header */}
      <div className="admin-card">
        <h3 className="card-title">Sayfa Başlığı ve Açıklaması</h3>
        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">Ana Başlık</label>
            <input
              type="text"
              value={team.title || ''}
              onChange={(e) => handleHeaderChange('title', e.target.value)}
              className="admin-input"
              placeholder="Yenilikçi"
            />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Vurgulu Başlık</label>
            <input
              type="text"
              value={team.titleHighlight || ''}
              onChange={(e) => handleHeaderChange('titleHighlight', e.target.value)}
              className="admin-input"
              placeholder="Ekibimiz"
            />
          </div>
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Alt Açıklama</label>
          <textarea
            rows={2}
            value={team.subtitle || ''}
            onChange={(e) => handleHeaderChange('subtitle', e.target.value)}
            className="admin-input"
            placeholder="Yüzlerce başarılı projeye imza atan..."
          />
        </div>
      </div>

      {/* Members List */}
      <div className="admin-card">
        <div className="card-header-flex">
          <div>
            <h3 className="card-title">Ekip Üyeleri ({members.length})</h3>
            <p className="admin-helper-text">Kartların sırasını yukarı/aşağı butonları ile değiştirebilirsiniz.</p>
          </div>
          <button type="button" onClick={addMember} className="btn-secondary">
            <Plus size={16} /> Yeni Üye Ekle
          </button>
        </div>

        <div className="items-list">
          {members.map((member, index) => (
            <div key={member.id || index} className="service-editor-card glass-panel">
              <div className="service-editor-header">
                <div className="service-badge-info">
                  <div className="item-order-controls">
                    <button
                      type="button"
                      onClick={() => moveMember(index, -1)}
                      disabled={index === 0}
                      className="btn-icon"
                      title="Yukarı Taşı"
                    >
                      <ChevronUp size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => moveMember(index, 1)}
                      disabled={index === members.length - 1}
                      className="btn-icon"
                      title="Aşağı Taşı"
                    >
                      <ChevronDown size={16} />
                    </button>
                  </div>
                  <span className="slide-title-preview">{member.name || 'İsimsiz Üye'}</span>
                  <span className="order-number">({member.role || 'Rol Belirtilmedi'})</span>
                </div>

                <button
                  type="button"
                  onClick={() => removeMember(index)}
                  className="btn-delete"
                  title="Üyeyi Sil"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="form-grid-2">
                <div className="admin-field-group">
                  <label className="admin-label">Ad Soyad</label>
                  <input
                    type="text"
                    value={member.name || ''}
                    onChange={(e) => updateMember(index, 'name', e.target.value)}
                    className="admin-input"
                  />
                </div>
                <div className="admin-field-group">
                  <label className="admin-label">Pozisyon / Rol</label>
                  <input
                    type="text"
                    value={member.role || ''}
                    onChange={(e) => updateMember(index, 'role', e.target.value)}
                    className="admin-input"
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="admin-field-group">
                  <label className="admin-label">E-Posta</label>
                  <input
                    type="email"
                    value={member.email || ''}
                    onChange={(e) => updateMember(index, 'email', e.target.value)}
                    className="admin-input"
                  />
                </div>
                <div className="admin-field-group">
                  <label className="admin-label">Web Sitesi / Portföy</label>
                  <input
                    type="text"
                    value={member.website || ''}
                    onChange={(e) => updateMember(index, 'website', e.target.value)}
                    className="admin-input"
                  />
                </div>
              </div>

              <ImageUploadField
                label="Profil Fotoğrafı"
                value={member.image || ''}
                onChange={(url) => updateMember(index, 'image', url)}
                placeholder="Fotoğraf URL veya yükleyin..."
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamTab;

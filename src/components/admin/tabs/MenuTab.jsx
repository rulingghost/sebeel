import React from 'react';
import { Compass, Plus, Trash2, ChevronUp, ChevronDown, CornerDownRight, ExternalLink } from 'lucide-react';
import PageSelector from '../PageSelector';

const MenuTab = ({ content, onChange }) => {
  const navigation = content.navigation || [];
  const ctaButton = content.ctaButton || { label: 'İletişime Geç', path: '/iletisim' };

  // Update navigation array
  const updateNav = (newNav) => {
    onChange({
      ...content,
      navigation: newNav
    });
  };

  // Update CTA button
  const updateCta = (field, val) => {
    onChange({
      ...content,
      ctaButton: {
        ...ctaButton,
        [field]: val
      }
    });
  };

  // Move item up/down
  const moveItem = (index, direction) => {
    const newNav = [...navigation];
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= newNav.length) return;
    const temp = newNav[index];
    newNav[index] = newNav[targetIndex];
    newNav[targetIndex] = temp;
    updateNav(newNav);
  };

  // Add top-level menu item
  const addMenuItem = () => {
    const newId = `nav-${Date.now()}`;
    const newItem = {
      id: newId,
      label: 'Yeni Menü',
      path: '/',
      isDropdown: false,
      children: []
    };
    updateNav([...navigation, newItem]);
  };

  // Remove top-level menu item
  const removeMenuItem = (index) => {
    if (window.confirm('Bu menü öğesini silmek istediğinize emin misiniz?')) {
      const newNav = navigation.filter((_, i) => i !== index);
      updateNav(newNav);
    }
  };

  // Edit top-level menu field
  const editMenuItem = (index, field, value) => {
    const newNav = [...navigation];
    newNav[index] = {
      ...newNav[index],
      [field]: value
    };
    // If enabling dropdown and no children yet, add empty array
    if (field === 'isDropdown' && value === true && (!newNav[index].children || newNav[index].children.length === 0)) {
      newNav[index].children = [
        { id: `sub-${Date.now()}-1`, label: 'Alt Menü 1', path: '/hizmetlerimiz' }
      ];
    }
    updateNav(newNav);
  };

  // Add child/submenu item
  const addChildItem = (parentIndex) => {
    const newNav = [...navigation];
    const parent = { ...newNav[parentIndex] };
    const children = parent.children ? [...parent.children] : [];
    children.push({
      id: `sub-${Date.now()}`,
      label: 'Yeni Alt Menü',
      path: '/hizmetler/canli-yayin'
    });
    parent.children = children;
    parent.isDropdown = true;
    newNav[parentIndex] = parent;
    updateNav(newNav);
  };

  // Remove child item
  const removeChildItem = (parentIndex, childIndex) => {
    const newNav = [...navigation];
    const parent = { ...newNav[parentIndex] };
    parent.children = parent.children.filter((_, i) => i !== childIndex);
    if (parent.children.length === 0) {
      parent.isDropdown = false;
    }
    newNav[parentIndex] = parent;
    updateNav(newNav);
  };

  // Move child item up/down
  const moveChildItem = (parentIndex, childIndex, direction) => {
    const newNav = [...navigation];
    const parent = { ...newNav[parentIndex] };
    const children = [...parent.children];
    const target = childIndex + direction;
    if (target < 0 || target >= children.length) return;
    const temp = children[childIndex];
    children[childIndex] = children[target];
    children[target] = temp;
    parent.children = children;
    newNav[parentIndex] = parent;
    updateNav(newNav);
  };

  // Edit child item
  const editChildItem = (parentIndex, childIndex, field, value) => {
    const newNav = [...navigation];
    const parent = { ...newNav[parentIndex] };
    const children = [...parent.children];
    children[childIndex] = {
      ...children[childIndex],
      [field]: value
    };
    parent.children = children;
    newNav[parentIndex] = parent;
    updateNav(newNav);
  };

  return (
    <div className="admin-tab-content">
      <div className="tab-header">
        <div className="tab-icon-box">
          <Compass size={22} />
        </div>
        <div>
          <h2>Menü ve Navigasyon Yönetimi</h2>
          <p>Sitenin üst menü ağacını, açılır (dropdown) alt menülerini ve butonlarını düzenleyin.</p>
        </div>
      </div>

      {/* CTA Button Settings */}
      <div className="admin-card">
        <h3 className="card-title">Sağ Üst Eylem Butonu (CTA)</h3>
        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">Buton Metni</label>
            <input
              type="text"
              value={ctaButton.label || ''}
              onChange={(e) => updateCta('label', e.target.value)}
              className="admin-input"
              placeholder="İletişime Geç"
            />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Yönlendirme Sayfası</label>
            <PageSelector
              value={ctaButton.path || '/iletisim'}
              onChange={(val) => updateCta('path', val)}
            />
          </div>
        </div>
      </div>

      {/* Menu Tree */}
      <div className="admin-card">
        <div className="card-header-flex">
          <div>
            <h3 className="card-title">Ana Menü Öğeleri ve Sıralama</h3>
            <p className="admin-helper-text">Aşağıdaki menü maddelerinin yönlendirme adreslerini listeden kolayca seçebilirsiniz.</p>
          </div>
          <button type="button" onClick={addMenuItem} className="btn-secondary">
            <Plus size={16} /> Yeni Menü Elemanı Ekle
          </button>
        </div>

        <div className="menu-list">
          {navigation.map((item, index) => (
            <div key={item.id || index} className="menu-item-box glass-panel">
              <div className="menu-item-header" style={{ alignItems: 'flex-start' }}>
                <div className="item-order-controls" style={{ marginTop: '0.4rem' }}>
                  <button
                    type="button"
                    onClick={() => moveItem(index, -1)}
                    disabled={index === 0}
                    className="btn-icon"
                    title="Yukarı Taşı"
                  >
                    <ChevronUp size={16} />
                  </button>
                  <span className="order-number">{index + 1}</span>
                  <button
                    type="button"
                    onClick={() => moveItem(index, 1)}
                    disabled={index === navigation.length - 1}
                    className="btn-icon"
                    title="Aşağı Taşı"
                  >
                    <ChevronDown size={16} />
                  </button>
                </div>

                <div className="menu-inputs-row" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr auto', gap: '1rem', alignItems: 'center' }}>
                    <input
                      type="text"
                      value={item.label}
                      onChange={(e) => editMenuItem(index, 'label', e.target.value)}
                      placeholder="Menü Başlığı (Örn: Hakkımızda)"
                      className="admin-input"
                    />
                    <PageSelector
                      value={item.path}
                      onChange={(val) => editMenuItem(index, 'path', val)}
                    />
                    <label className="checkbox-label" style={{ whiteSpace: 'nowrap' }}>
                      <input
                        type="checkbox"
                        checked={!!item.isDropdown}
                        onChange={(e) => editMenuItem(index, 'isDropdown', e.target.checked)}
                      />
                      <span>Açılır Menü (Dropdown)</span>
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => removeMenuItem(index)}
                  className="btn-delete"
                  title="Menüyü Sil"
                  style={{ marginTop: '0.4rem' }}
                >
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Submenu / Children Section */}
              {item.isDropdown && (
                <div className="submenu-container">
                  <div className="submenu-header">
                    <span className="submenu-title">
                      <CornerDownRight size={14} /> Alt Menü Öğeleri ({item.children?.length || 0})
                    </span>
                    <button
                      type="button"
                      onClick={() => addChildItem(index)}
                      className="btn-mini"
                    >
                      <Plus size={12} /> Alt Öğe Ekle
                    </button>
                  </div>

                  <div className="submenu-list">
                    {item.children && item.children.map((child, childIdx) => (
                      <div key={child.id || childIdx} className="submenu-item-row" style={{ display: 'grid', gridTemplateColumns: 'auto 1.2fr 2fr auto', gap: '0.75rem', alignItems: 'center' }}>
                        <div className="item-order-controls-mini">
                          <button
                            type="button"
                            onClick={() => moveChildItem(index, childIdx, -1)}
                            disabled={childIdx === 0}
                            className="btn-icon-mini"
                          >
                            <ChevronUp size={12} />
                          </button>
                          <button
                            type="button"
                            onClick={() => moveChildItem(index, childIdx, 1)}
                            disabled={childIdx === (item.children.length - 1)}
                            className="btn-icon-mini"
                          >
                            <ChevronDown size={12} />
                          </button>
                        </div>
                        <input
                          type="text"
                          value={child.label}
                          onChange={(e) => editChildItem(index, childIdx, 'label', e.target.value)}
                          placeholder="Alt Menü Adı"
                          className="admin-input-mini"
                        />
                        <PageSelector
                          value={child.path}
                          onChange={(val) => editChildItem(index, childIdx, 'path', val)}
                        />
                        <button
                          type="button"
                          onClick={() => removeChildItem(index, childIdx)}
                          className="btn-delete-mini"
                          title="Alt Öğeyi Sil"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    ))}
                    {(!item.children || item.children.length === 0) && (
                      <p className="empty-hint">Henüz alt menü eklenmedi. "Alt Öğe Ekle" butonuna tıklayın.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuTab;

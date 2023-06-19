module.exports = {
  DocsSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Tài liệu',
    },
    {
      type: 'category',
      label: 'Bắt đầu',
      collapsible: true,
      link: { type: 'doc', id: 'batdau/overview' },
      items: [
        {
          type: 'category',
          label: 'Các bước đầu tiên',
          items: [
            'batdau/cac-buoc-dau-tien/chin-buoc',
            'batdau/cac-buoc-dau-tien/thiet-lap',
            'batdau/cac-buoc-dau-tien/cai-dat',
          ],
        },
        {
          type: 'category',
          label: 'Hỏi đáp',
          items: ['batdau/hoi-dap/who', 'batdau/hoi-dap/where'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Quản lý Bảng điều khiển',
      collapsible: true,
      link: { type: 'doc', id: 'bang-dieu-khien/overview' },
      items: [
        {
          type: 'category',
          label: 'Đơn hàng',
          collapsible: true,
          items: ['bang-dieu-khien/don-hang/sua-don-hang'],
        },
        {
          type: 'category',
          label: 'Giao nhận hàng',
          collapsible: true,
          items: ['bang-dieu-khien/giao-hang/cai-dat'],
        },
        {
          type: 'category',
          label: 'Cài đặt chung',
          collapsible: true,
          items: ['bang-dieu-khien/cai-dat-chung/dat-hang-qua-chat'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Câu hỏi thường gặp và vấn đề phổ biến',
      collapsible: true,
      link: { type: 'doc', id: 'hoi-dap/overview' },
      items: [
        {
          type: 'category',
          label: 'Gặp Vấn Đề Kỹ Thuật',
          items: ['hoi-dap/loi-thuong-gap'],
        },
      ],
    },
  ],
};

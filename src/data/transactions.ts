export type Customer = {
  name: string,
  phone: string,
}

export type TransactionStatus = "paid" | "unpaid" | "cancel";

export type Transaction = {
  id: string,
  trx_no: string,
  date: string,
  customer: Customer,
  status: TransactionStatus,
  items: ItemTransaction[],
  notes: string,
}

export type ItemTransaction = {
  item_id: string,
  code: string,
  name: string,
  price: number,
  qty: number,
}

export const transactions: Transaction[] = [
  {
    "id": "trx_0001",
    "trx_no": "TRX-2025-0001",
    "date": "2025-12-01",
    "customer": { "name": "PT Maju Jaya", "phone": "081234567890" },
    "status": "paid",
    "items": [
      { "item_id": "itm_001", "code": "PRD-001", "name": "Paket Basic", "price": 150000, "qty": 1 },
      { "item_id": "itm_006", "code": "ADD-001", "name": "Add-on Extra User", "price": 50000, "qty": 2 }
    ],
    "notes": "Pembayaran via transfer"
  },
  {
    "id": "trx_0002",
    "trx_no": "TRX-2025-0002",
    "date": "2025-12-03",
    "customer": { "name": "CV Sinar Terang", "phone": "082211112222" },
    "status": "unpaid",
    "items": [
      { "item_id": "itm_002", "code": "PRD-002", "name": "Paket Pro", "price": 350000, "qty": 1 }
    ],
    "notes": ""
  },
  {
    "id": "trx_0003",
    "trx_no": "TRX-2025-0003",
    "date": "2025-12-05",
    "customer": { "name": "Andi Saputra", "phone": "081355566677" },
    "status": "cancel",
    "items": [
      { "item_id": "itm_004", "code": "SRV-001", "name": "Setup & Onboarding", "price": 500000, "qty": 1 }
    ],
    "notes": "Dibatalkan customer"
  },
  {
    "id": "trx_0004",
    "trx_no": "TRX-2025-0004",
    "date": "2025-12-07",
    "customer": { "name": "Bambang Heru", "phone": "081988887777" },
    "status": "paid",
    "items": [
      { "item_id": "itm_001", "code": "PRD-001", "name": "Paket Basic", "price": 150000, "qty": 1 },
      { "item_id": "itm_012", "code": "ADD-002", "name": "Extra Storage 100GB", "price": 35000, "qty": 3 }
    ],
    "notes": ""
  },
  {
    "id": "trx_0005",
    "trx_no": "TRX-2025-0005",
    "date": "2025-12-10",
    "customer": { "name": "PT Sumber Rejeki", "phone": "0215554433" },
    "status": "unpaid",
    "items": [
      { "item_id": "itm_003", "code": "PRD-003", "name": "Paket Enterprise", "price": 850000, "qty": 1 },
      { "item_id": "itm_004", "code": "SRV-001", "name": "Setup & Onboarding", "price": 500000, "qty": 1 }
    ],
    "notes": "Menunggu PO"
  },
  {
    "id": "trx_0006",
    "trx_no": "TRX-2025-0006",
    "date": "2025-12-12",
    "customer": { "name": "Siska Putri", "phone": "087722223333" },
    "status": "paid",
    "items": [
      { "item_id": "itm_006", "code": "ADD-001", "name": "Add-on Extra User", "price": 50000, "qty": 5 }
    ],
    "notes": "Upgrade user"
  },
  {
    "id": "trx_0007",
    "trx_no": "TRX-2025-0007",
    "date": "2025-12-15",
    "customer": { "name": "CV Tekno Digital", "phone": "081299990000" },
    "status": "paid",
    "items": [
      { "item_id": "itm_002", "code": "PRD-002", "name": "Paket Pro", "price": 350000, "qty": 2 }
    ],
    "notes": ""
  },
  {
    "id": "trx_0008",
    "trx_no": "TRX-2025-0008",
    "date": "2025-12-18",
    "customer": { "name": "Rina Wijaya", "phone": "085611112222" },
    "status": "cancel",
    "items": [
      { "item_id": "itm_001", "code": "PRD-001", "name": "Paket Basic", "price": 150000, "qty": 1 }
    ],
    "notes": "Salah pilih paket"
  },
  {
    "id": "trx_0009",
    "trx_no": "TRX-2025-0009",
    "date": "2025-12-20",
    "customer": { "name": "PT Global Solusi", "phone": "02177778888" },
    "status": "paid",
    "items": [
      { "item_id": "itm_008", "code": "PRD-005", "name": "Paket Business Platinum", "price": 1250000, "qty": 1 },
      { "item_id": "itm_009", "code": "SRV-003", "name": "Priority Support 24/7", "price": 200000, "qty": 12 }
    ],
    "notes": "Kontrak 1 tahun"
  },
  {
    "id": "trx_0010",
    "trx_no": "TRX-2025-0010",
    "date": "2025-12-22",
    "customer": { "name": "Fajar Ramadhan", "phone": "081344445555" },
    "status": "unpaid",
    "items": [
      { "item_id": "itm_002", "code": "PRD-002", "name": "Paket Pro", "price": 350000, "qty": 1 }
    ],
    "notes": ""
  },
  {
    "id": "trx_0011",
    "trx_no": "TRX-2025-0011",
    "date": "2025-12-28",
    "customer": { "name": "PT Jaya Abadi", "phone": "081199998888" },
    "status": "paid",
    "items": [
      { "item_id": "itm_014", "code": "ADD-004", "name": "API Access Premium", "price": 600000, "qty": 1 }
    ],
    "notes": ""
  },
  {
    "id": "trx_0012",
    "trx_no": "TRX-2026-0001",
    "date": "2026-01-02",
    "customer": { "name": "Lestari Market", "phone": "085200001111" },
    "status": "paid",
    "items": [
      { "item_id": "itm_001", "code": "PRD-001", "name": "Paket Basic", "price": 150000, "qty": 2 }
    ],
    "notes": "Tahun baru promo"
  },
  {
    "id": "trx_0013",
    "trx_no": "TRX-2026-0002",
    "date": "2026-01-03",
    "customer": { "name": "Hendra Kurniawan", "phone": "089944443333" },
    "status": "cancel",
    "items": [
      { "item_id": "itm_003", "code": "PRD-003", "name": "Paket Enterprise", "price": 850000, "qty": 1 }
    ],
    "notes": "Budget tidak disetujui"
  },
  {
    "id": "trx_0014",
    "trx_no": "TRX-2026-0003",
    "date": "2026-01-05",
    "customer": { "name": "CV Media Kreasi", "phone": "081233334444" },
    "status": "paid",
    "items": [
      { "item_id": "itm_010", "code": "SRV-004", "name": "Custom Domain Setup", "price": 100000, "qty": 1 },
      { "item_id": "itm_013", "code": "ADD-003", "name": "White-label Branding", "price": 450000, "qty": 1 }
    ],
    "notes": ""
  },
  {
    "id": "trx_0015",
    "trx_no": "TRX-2026-0004",
    "date": "2026-01-07",
    "customer": { "name": "Dewi Sartika", "phone": "081755556666" },
    "status": "unpaid",
    "items": [
      { "item_id": "itm_001", "code": "PRD-001", "name": "Paket Basic", "price": 150000, "qty": 1 }
    ],
    "notes": ""
  },
  {
    "id": "trx_0016",
    "trx_no": "TRX-2026-0005",
    "date": "2026-01-08",
    "customer": { "name": "PT Inovasi Bangsa", "phone": "02188889999" },
    "status": "paid",
    "items": [
      { "item_id": "itm_003", "code": "PRD-003", "name": "Paket Enterprise", "price": 850000, "qty": 5 }
    ],
    "notes": "Bulk buy 5 accounts"
  },
  {
    "id": "trx_0017",
    "trx_no": "TRX-2026-0006",
    "date": "2026-01-10",
    "customer": { "name": "Agus Salim", "phone": "085566667777" },
    "status": "paid",
    "items": [
      { "item_id": "itm_012", "code": "ADD-002", "name": "Extra Storage 100GB", "price": 35000, "qty": 10 }
    ],
    "notes": "Add 1TB storage"
  },
  {
    "id": "trx_0018",
    "trx_no": "TRX-2026-0007",
    "date": "2026-01-12",
    "customer": { "name": "Samsul Arifin", "phone": "081122223333" },
    "status": "unpaid",
    "items": [
      { "item_id": "itm_002", "code": "PRD-002", "name": "Paket Pro", "price": 350000, "qty": 1 }
    ],
    "notes": ""
  },
  {
    "id": "trx_0019",
    "trx_no": "TRX-2026-0008",
    "date": "2026-01-14",
    "customer": { "name": "PT Berkah Alam", "phone": "081266667777" },
    "status": "paid",
    "items": [
      { "item_id": "itm_004", "code": "SRV-001", "name": "Setup & Onboarding", "price": 500000, "qty": 1 },
      { "item_id": "itm_002", "code": "PRD-002", "name": "Paket Pro", "price": 350000, "qty": 1 }
    ],
    "notes": ""
  },
  {
    "id": "trx_0020",
    "trx_no": "TRX-2026-0009",
    "date": "2026-01-15",
    "customer": { "name": "Maya Indah", "phone": "081377778888" },
    "status": "paid",
    "items": [
      { "item_id": "itm_001", "code": "PRD-001", "name": "Paket Basic", "price": 150000, "qty": 1 }
    ],
    "notes": ""
  },
  {
    "id": "trx_0021",
    "trx_no": "TRX-2026-0010",
    "date": "2026-01-16",
    "customer": { "name": "PT Cipta Mandiri", "phone": "02144445555" },
    "status": "paid",
    "items": [
      { "item_id": "itm_008", "code": "PRD-005", "name": "Paket Business Platinum", "price": 1250000, "qty": 1 }
    ],
    "notes": "VIP Client"
  },
  {
    "id": "trx_0022",
    "trx_no": "TRX-2026-0011",
    "date": "2026-01-18",
    "customer": { "name": "Rizky Fauzi", "phone": "089966661111" },
    "status": "unpaid",
    "items": [
      { "item_id": "itm_006", "code": "ADD-001", "name": "Add-on Extra User", "price": 50000, "qty": 2 }
    ],
    "notes": ""
  },
  {
    "id": "trx_0023",
    "trx_no": "TRX-2026-0012",
    "date": "2026-01-20",
    "customer": { "name": "CV Tunas Muda", "phone": "087788889999" },
    "status": "paid",
    "items": [
      { "item_id": "itm_001", "code": "PRD-001", "name": "Paket Basic", "price": 150000, "qty": 1 },
      { "item_id": "itm_010", "code": "SRV-004", "name": "Custom Domain Setup", "price": 100000, "qty": 1 }
    ],
    "notes": "Instant activation requested"
  }
];

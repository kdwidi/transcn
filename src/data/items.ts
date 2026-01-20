export type Item = {
  id: string,
  code: string,
  name: string,
  price: number,
  status: "active" | "inactive"
}

export const items: Item[] = [
  { "id": "itm_001", "code": "PRD-001", "name": "Paket Basic", "price": 150000, "status": "active" },
  { "id": "itm_002", "code": "PRD-002", "name": "Paket Pro", "price": 350000, "status": "active" },
  { "id": "itm_003", "code": "PRD-003", "name": "Paket Enterprise", "price": 850000, "status": "active" },
  { "id": "itm_004", "code": "SRV-001", "name": "Setup & Onboarding", "price": 500000, "status": "active" },
  { "id": "itm_005", "code": "SRV-002", "name": "Maintenance Bulanan", "price": 250000, "status": "inactive" },
  { "id": "itm_006", "code": "ADD-001", "name": "Add-on Extra User", "price": 50000, "status": "active" },
  { "id": "itm_007", "code": "PRD-004", "name": "Paket Student", "price": 75000, "status": "active" },
  { "id": "itm_008", "code": "PRD-005", "name": "Paket Business Platinum", "price": 1250000, "status": "active" },
  { "id": "itm_009", "code": "SRV-003", "name": "Priority Support 24/7", "price": 200000, "status": "active" },
  { "id": "itm_010", "code": "SRV-004", "name": "Custom Domain Setup", "price": 100000, "status": "active" },
  { "id": "itm_011", "code": "SRV-005", "name": "Keamanan Data Audit", "price": 1500000, "status": "inactive" },
  { "id": "itm_012", "code": "ADD-002", "name": "Extra Storage 100GB", "price": 35000, "status": "active" },
  { "id": "itm_013", "code": "ADD-003", "name": "White-label Branding", "price": 450000, "status": "active" },
  { "id": "itm_014", "code": "ADD-004", "name": "API Access Premium", "price": 600000, "status": "active" },
  { "id": "itm_015", "code": "PRD-006", "name": "Paket Trial 30 Hari", "price": 0, "status": "active" },
  { "id": "itm_016", "code": "SRV-006", "name": "Konsultasi IT Expert", "price": 750000, "status": "inactive" }
];

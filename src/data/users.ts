export type UserStatus = "active" | "inactive";
export type UserRole = "admin" | "staff";

export type User = {
  id: string,
  name: string,
  email: string,
  role: UserRole,
  status: UserStatus,
  created_at: string,
}

export const users: User[] = [
  {
    "id": "usr_001",
    "name": "Alpha Guardian",
    "email": "admin@example.com",
    "role": "admin",
    "status": "active",
    "created_at": "2025-07-10T09:15:00Z"
  },
  {
    "id": "usr_002",
    "name": "Budi Santoso",
    "email": "budi@company.test",
    "role": "staff",
    "status": "active",
    "created_at": "2025-08-01T10:00:00Z"
  },
  {
    "id": "usr_003",
    "name": "Siti Rahma",
    "email": "siti@company.test",
    "role": "staff",
    "status": "inactive",
    "created_at": "2025-08-12T02:30:00Z"
  },
  {
    "id": "usr_004",
    "name": "Dimas Pratama",
    "email": "dimas@company.test",
    "role": "staff",
    "status": "active",
    "created_at": "2025-09-03T14:20:00Z"
  },
  {
    "id": "usr_005",
    "name": "Nadia Putri",
    "email": "nadia@company.test",
    "role": "staff",
    "status": "active",
    "created_at": "2025-10-19T07:45:00Z"
  },
  {
    "id": "usr_006",
    "name": "Rizky Maulana",
    "email": "rizky@company.test",
    "role": "staff",
    "status": "inactive",
    "created_at": "2025-11-02T12:05:00Z"
  },
  {
    "id": "usr_007",
    "name": "Siti Aminah",
    "email": "siti@company.test",
    "role": "admin",
    "status": "active",
    "created_at": "2025-11-15T09:30:00Z"
  },
  {
    "id": "usr_008",
    "name": "Budi Santoso",
    "email": "budi@company.test",
    "role": "staff",
    "status": "active",
    "created_at": "2025-12-01T14:20:00Z"
  },
  {
    "id": "usr_009",
    "name": "Dewi Lestari",
    "email": "dewi@company.test",
    "role": "manager",
    "status": "active",
    "created_at": "2025-12-10T10:00:00Z"
  },
  {
    "id": "usr_010",
    "name": "Eko Prasetyo",
    "email": "eko@company.test",
    "role": "staff",
    "status": "inactive",
    "created_at": "2026-01-05T08:45:00Z"
  },
  {
    "id": "usr_011",
    "name": "Fitriani",
    "email": "fitri@company.test",
    "role": "staff",
    "status": "inactive",
    "created_at": "2026-01-12T11:15:00Z"
  },
  {
    "id": "usr_012",
    "name": "Guntur Wijaya",
    "email": "guntur@company.test",
    "role": "admin",
    "status": "active",
    "created_at": "2026-01-15T16:40:00Z"
  },
  {
    "id": "usr_013",
    "name": "Hana Pertiwi",
    "email": "hana@company.test",
    "role": "manager",
    "status": "inactive",
    "created_at": "2026-01-18T09:00:00Z"
  },
  {
    "id": "usr_014",
    "name": "Iwan Fals",
    "email": "iwan@company.test",
    "role": "staff",
    "status": "active",
    "created_at": "2026-01-19T13:10:00Z"
  },
  {
    "id": "usr_015",
    "name": "Joko Widodo",
    "email": "joko@company.test",
    "role": "staff",
    "status": "inactive",
    "created_at": "2026-01-20T10:30:00Z"
  },
  {
    "id": "usr_016",
    "name": "Kartika Sari",
    "email": "kartika@company.test",
    "role": "manager",
    "status": "active",
    "created_at": "2026-01-20T15:55:00Z"
  }
];

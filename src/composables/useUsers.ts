import type { User } from "../types/user";

export const users: User[] = [
  {
    id: 1,
    name: "User 1",
    email: "1@um.com",
    role: "viewer",
    status: "active",
    password: "1234",
  },
  {
    id: 2,
    name: "User 2",
    email: "2@um.com",
    role: "admin",
    status: "not active",
    password: "1234",
  },
  {
    id: 3,
    name: "User 3",
    email: "3@um.com",
    role: "viewer",
    status: "active",
    password: "1234",
  },
  {
    id: 4,
    name: "User 4",
    email: "4@um.com",
    role: "viewer",
    status: "not active",
    password: "1234",
  },
  {
    id: 5,
    name: "User 5",
    email: "5@um.com",
    role: "admin",
    status: "active",
    password: "1234",
  },
  {
    id: 6,
    name: "User 6",
    email: "6@um.com",
    role: "manager",
    status: "not active",
    password: "1234",
  },
  {
    id: 7,
    name: "User 7",
    email: "7@um.com",
    role: "viewer",
    status: "active",
    password: "1234",
  },
  {
    id: 8,
    name: "User 8",
    email: "8@um.com",
    role: "manager",
    status: "not active",
    password: "1234",
  },
  {
    id: 9,
    name: "User 9",
    email: "9@um.com",
    role: "viewer",
    status: "active",
    password: "1234",
  },
  {
    id: 10,
    name: "User 10",
    email: "10@um.com",
    role: "viewer",
    status: "not active",
    password: "1234",
  },
  {
    id: 11,
    name: "User 11",
    email: "11@um.com",
    role: "manager",
    status: "active",
    password: "1234",
  },
  {
    id: 12,
    name: "User 12",
    email: "12@um.com",
    role: "admin",
    status: "not active",
    password: "1234",
  },
  {
    id: 13,
    name: "User 13",
    email: "13@um.com",
    role: "admin",
    status: "active",
    password: "1234",
  },
  {
    id: 14,
    name: "User 14",
    email: "14@um.com",
    role: "admin",
    status: "not active",
    password: "1234",
  },
  {
    id: 15,
    name: "User 15",
    email: "15@um.com",
    role: "admin",
    status: "active",
    password: "1234",
  },
  {
    id: 16,
    name: "User 16",
    email: "16@um.com",
    role: "manager",
    status: "not active",
    password: "1234",
  },
  {
    id: 17,
    name: "User 17",
    email: "17@um.com",
    role: "viewer",
    status: "active",
    password: "1234",
  },
  {
    id: 18,
    name: "User 18",
    email: "18@um.com",
    role: "admin",
    status: "not active",
    password: "1234",
  },
  {
    id: 19,
    name: "User 19",
    email: "19@um.com",
    role: "manager",
    status: "active",
    password: "1234",
  },
  {
    id: 20,
    name: "User 20",
    email: "20@um.com",
    role: "viewer",
    status: "not active",
    password: "1234",
  },
];

// export const generateUsers = (count: number): User[] => {
//   const roles = ["admin", "viewer", "manager"] as const;
//   const statuses = ["active", "not active"] as const;

//   return Array.from({ length: count }, (_, i) => ({
//     id: i + 1,
//     name: `User ${i + 1}`,
//     email: `${i + 1}@um.com`,
//     role: roles[Math.floor(Math.random() * roles.length)],
//     status: statuses[Math.floor(Math.random() * statuses.length)],
//   }));
// };

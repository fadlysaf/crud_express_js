import prisma from "../src/config/prisma";
import process from "process";

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: "Fadly Safyuddin",
        email: "fadly@gmail.com",
      },
      {
        name: "Budi Santoso",
        email: "budi@gmail.com",
      },
      {
        name: "Siti Aminah",
        email: "siti@gmail.com",
      },
      {
        name: "Andi Wijaya",
        email: "andi@gmail.com",
      },
      {
        name: "Rina Putri",
        email: "rina@gmail.com",
      },
      {
        name: "Eko Prasetyo",
        email: "eko@gmail.com",
      },
      {
        name: "Dewi Lestari",
        email: "dewi@gmail.com",
      },
      {
        name: "Rizky Ramadhan",
        email: "rizky@gmail.com",
      },
      {
        name: "Sari Wijaya",
        email: "sari@gmail.com",
      },
      {
        name: "Agus Setiawan",
        email: "agus@gmail.com",
      },
      {
        name: "Mega Utami",
        email: "mega@gmail.com",
      },
      {
        name: "Hendra Kurniawan",
        email: "hendra@gmail.com",
      },
      {
        name: "Fitriani",
        email: "fitriani@gmail.com",
      },
      {
        name: "Aditya Nugraha",
        email: "aditya@gmail.com",
      },
      {
        name: "Yuni Kartika",
        email: "yuni@gmail.com",
      },
      {
        name: "Denny Hidayat",
        email: "denny@gmail.com",
      },
      {
        name: "Sri Wahyuni",
        email: "sri@gmail.com",
      },
      {
        name: "Aris Munandar",
        email: "aris@gmail.com",
      },
      {
        name: "Dian Sastro",
        email: "dian@gmail.com",
      },
      {
        name: "Taufik Hidayat",
        email: "taufik@gmail.com",
      },
    ],
    skipDuplicates: true,
  });

  console.log("Seeder dengan 20 data berhasil dijalankan");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

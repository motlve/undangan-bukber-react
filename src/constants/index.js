import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Mari bergabung dalam acara buka bersama kami! Nikmati hidangan lezat, suasana hangat, dan kebersamaan yang penuh makna. Jangan lewatkan kesempatan untuk bersilaturahmi dan menikmati momen istimewa ini bersama teman dan keluarga.`;

export const ABOUT_TEXT = `Kami dengan senang hati mengundang Anda untuk menghadiri acara buka puasa bersama yang penuh kehangatan dan kebersamaan. Acara ini bertujuan untuk mempererat tali silaturahmi sambil menikmati hidangan lezat dalam suasana yang nyaman dan penuh berkah. 

Kami menyediakan berbagai hidangan spesial untuk menemani momen berbuka Anda, mulai dari takjil hingga hidangan utama yang menggugah selera. Jangan lewatkan kesempatan ini untuk berkumpul dan berbagi kebahagiaan bersama.`;

export const EXPERIENCES = [
  {
    year: "Juli 2023 - September 2023",
    role: "Full Stack Developer",
    company: " Badan Pangan Nasional",
    description: `Pernah magang membuat sebuah website untuk membuat surat perjalanan dinas karyawan dalam divisi Pusat Data dan Informasi Pangan`,
    technologies: ["Javascript", "Laravel", "HTML", "Css"],
  },
  {
    year: "Juli 2023 - Agustus 2023",
    role: "Full Stack Developer",
    company: " Ditjen Bina Pemerintahan Desa Kemendagri",
    description: `Kolaborasi dengan kawan untuk membuat sebuah website pelatihan/belajar online bagi para pengguna`,
    technologies: ["PHP", "HTML", "Css", "Javascript"],
  },
  {
    year: "Agustus 2024 - Oktober 2024",
    role: "Admin",
    company: " Dropper",
    description: `Magang sebagai admin pada perusahaan jasa ekspedisi yang bernama Dropper. Dropper bekerja sama dengan
    perusahaan ekspedisi lain yaitu JNT dan SiCepat.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Website Perjalanan Dinas",
    image: project1,
    description:
      "Sebuah website yang dapat membuat surat perjalanan dinas karyawan divisi Pusat Data dan Informasi Pangan di Badan Pangan Nasional.",
    technologies: ["HTML", "CSS", "Javascript", "PHP-Laravel", "SQL"],
  },
  {
    title: "Online Learning Website p3k",
    image: project2,
    description:
      "Membuat sebuah website pembelajaran online user pada Ditjen Bina Pemerintahan Desa Kemendagri",
    technologies: ["HTML", "CSS", "PHP", "Javascript", "SQL"],
  },
  {
    title: "Website Visualisasi Data",
    image: project3,
    description:
      "Membuat sebuah website untuk memvisualisasikan data penjualan yang diambil dari Google Big Query dan dieksport menjadi file json.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Website Logistik",
    image: project4,
    description:
      "Website untuk Menampilkan, Menghapus, Menambah, Mengupdate data logistik barang yang dimiliki dan terintegrasi langsung dengan database.",
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "SQL"],
  },
];

export const CONTACT = {
  address: "Cipete Selatan, Cilandak, Jakarta Selatan (12410) - Jakarta ",
  phoneNo: "+62 83805781815 ",
  email: "allifrizki02@gmail.com",
};

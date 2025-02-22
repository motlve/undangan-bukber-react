import { motion } from "framer-motion";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";
import bgHero from "../assets/bg/bgHero.jpg";

function Konfirmasi() {
  const googleFormLink = "https://forms.gle/9RU8tYuarUSFevbT8";

  const whatsappMessage = encodeURIComponent(
    ` *Konfirmasi Pendaftaran Bukber* \n\n` +
      `=============================\n` +
      ` *Nama:* \n` +
      ` *Domisili:* \n` +
      ` *Transportasi ke lokasi:* \n` +
      ` *Perlu dijemput?* (Ya/Tidak, di mana): \n` +
      ` *Bersedia bayar patungan?* (Ya/Tidak, alasan): \n` +
      ` *Nomor WhatsApp:* \n` +
      ` *Bukti transfer:* (Silakan kirim foto setelah ini)\n` +
      `=============================\n\n` +
      ` *Thanks Guys! Kita tunggu kehadiran lo!* `
  );

  const whatsappLinks = [
    {
      number: "6282154741621", 
      name: "Luqman",
    },
    {
      number: "6288293925579", 
      name: "Dea",
    },
  ];

  return (
    <div
      className="relative flex flex-col items-center justify-center gap-4 min-h-[50vh] w-full text-white p-4 lg:p-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mb-20 text-2xl font-extrabold text-white relative px-6 py-3 border-4 border-gray-500 bg-pink-700 rounded-lg shadow-lg"
      >
        KURENG WARASH{" "}
        <span className="text-yellow-400 drop-shadow-lg font-extrabold">
          (RSVP)
        </span>
      </motion.h2>

      <div className="flex flex-col items-center gap-4">
        {/* Tombol Google Form */}
        <motion.a
          href={googleFormLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <FaGoogle size={26} className="text-white" />
          <span className="text-white font-bold">Isi Form di Google</span>
        </motion.a>

        {/* Tombol WhatsApp untuk dua admin */}
        <div className="flex flex-col gap-3">
          {whatsappLinks.map((admin, index) => (
            <motion.a
              key={index}
              href={`https://wa.me/${admin.number}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-600 px-6 py-3 rounded-lg shadow-lg hover:bg-green-500 transition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <FaWhatsapp size={26} className="text-white" />
              <span className="text-white font-bold">
                Konfirmasi via WhatsApp ({admin.name})
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Konfirmasi;

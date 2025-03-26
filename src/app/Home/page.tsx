"use client";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { CldImage } from "next-cloudinary";

export default function Home() {
    return (
        <main className="flex">
            {/* Sidebar */}
            <aside className="w-64 bg-pink-900 text-white fixed top-0 left-0 h-full p-6">
    <h2 className="text-3xl font-semibold mb-6">Camila Montechiani</h2>
    <nav className="flex flex-col space-y-4">
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-pink-200 block">
            Sección Hero
        </Link>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-pink-200 block">
            Sobre mí
        </Link>
        <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-pink-200 block">
            Habilidades
        </Link>
        <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-pink-200 block">
            Experiencia
        </Link>
        <Link to="education" smooth={true} duration={500} className="cursor-pointer hover:text-pink-200 block">
            Educación
        </Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-pink-200 block">
            Contacto
        </Link>
    </nav>
</aside>


            {/* Main Content */}
            <div className="ml-64 flex flex-col w-full">
                {/* Sección Hero */}
                <motion.section
                    id="hero"
                    className="h-screen flex items-center justify-center bg-pink-200 text-pink-900 p-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex items-center space-x-6">
                        <CldImage
                            src="https://res.cloudinary.com/dc5is8iu2/image/upload/v1743006383/20230914_154406_jgwber.jpg"
                            width={150}
                            height={150}
                            alt="Camila Montechiani"
                            className=" shadow-lg"
                        />
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">¡Hola, soy Camila Montechiani!</h1>
                            <p className="mt-4 text-xl max-w-2xl">
                                Desarrolladora Full Stack con foco en Front-End y experiencia en Next.js, TypeScript y Tailwind CSS.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Sección Sobre mí */}
                <motion.section
                    id="about"
                    className="h-screen flex flex-col items-center justify-center bg-pink-300 text-pink-800 p-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-semibold">Sobre mí</h2>
                    <p className="max-w-2xl text-center mt-4">
                        Actualmente lidero el desarrollo Front-End del Club Náutico Paraná y trabajo como QA Tester en Nubbo.io.
                        Además, he sido formadora en Soy Henry, ayudando a estudiantes en React, Node.js y PostgreSQL.
                    </p>
                </motion.section>

                {/* Sección Habilidades */}
                <motion.section
                    id="skills"
                    className="h-screen flex flex-col items-center justify-center bg-pink-600 text-white p-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-semibold">Habilidades</h2>
                    <div className="grid grid-cols-4 gap-6 mt-6">
                        {[
                            { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                            { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                            { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                            { name: "Tailwind CSS", url: "https://res.cloudinary.com/dc5is8iu2/image/upload/v1743007170/tailwind-css-logo-vector_gswmpl.png" },
                            { name: "SQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                            { name: "Redux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
                            { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                            { name: "Selenium", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" }
                        ].map((tech) => (
                            <motion.div
                                key={tech.name}
                                className="p-4 bg-white rounded-xl shadow-lg flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img src={tech.url} alt={tech.name} width={50} height={50} />
                            </motion.div>
                        ))}
                    </div>
                    <p className="mt-6 text-center max-w-2xl">
                        Estas son algunas de las tecnologías que manejo para crear soluciones eficientes y escalables en el desarrollo web.
                    </p>
                </motion.section>

                {/* Sección Experiencia */}
                <motion.section
                    id="experience"
                    className="h-screen flex flex-col items-center justify-center bg-pink-400 text-white p-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-semibold">Experiencia</h2>
                    <ul className="mt-4 text-center max-w-2xl">
                        <li><strong>Nubbo.io (QA Tester)</strong> - Diseño y ejecución de pruebas manuales en MySQL y Postman.</li>
                        <li><strong>Club Náutico Paraná (Front-End)</strong> - Desarrollo con Next.js y optimización UX/UI.</li>
                        <li><strong>Valkirias Personalizados (Front-End)</strong> - Creación de interfaces responsivas con Tailwind CSS.</li>
                    </ul>
                </motion.section>

                {/* Sección Educación */}
                <motion.section
                    id="education"
                    className="h-screen flex flex-col items-center justify-center bg-pink-500 text-white p-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-semibold">Educación</h2>
                    <ul className="mt-4 text-center max-w-2xl">
                        <li><strong>Soy Henry</strong> - Full Stack Developer (Teaching Assistant).</li>
                        <li><strong>Edutin Academy</strong> - Tester de Software.</li>
                    </ul>
                </motion.section>

                {/* Sección Contacto */}
                <motion.section
                    id="contact"
                    className="h-screen flex flex-col items-center justify-center bg-pink-700 text-white p-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-semibold">¡Contáctame!💌</h2>
                    <a
                        href="https://www.linkedin.com/in/camila-montechiani"
                        target="_blank"
                        className="mt-4 px-6 py-3 bg-white text-pink-700 font-bold rounded-full shadow-lg hover:bg-gray-200"
                    >
                        Ir a mi LinkedIn
                    </a>
                    <a
                        href="https://github.com/Camilamontechiani"
                        target="_blank"
                        className="mt-4 px-6 py-3 bg-white text-pink-700 font-bold rounded-full shadow-lg hover:bg-gray-200"
                    >
                        Ver mi GitHub
                    </a>
                </motion.section>
            </div>
        </main>
    );
}

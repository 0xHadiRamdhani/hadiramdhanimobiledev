import { motion } from "framer-motion";

export function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="py-8 border-t border-white/5 relative z-10 glass-panel"
        >
            <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Hadi Ramdhani. All rights reserved.</p>
                <p className="mt-2">Built with <span className="text-neon-cyan">Next.js</span> & <span className="text-neon-violet">Tailwind CSS</span></p>
            </div>
        </motion.footer>
    );
}

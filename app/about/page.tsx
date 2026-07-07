import SkillCard from '@/components/SkillCard';

export default function About() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-700 mb-8">
                I&apos;m a Software Development student at BYU-Idaho, currently building full-stack
                applications with Node.js, Express, and Next.js. My background includes aviation
                ground handling and IT project support, which shapes how I approach building
                reliable, well-organized systems.
            </p>

            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="grid gap-4 md:grid-cols-2">
                <SkillCard
                    category="Languages"
                    skills={['JavaScript', 'TypeScript', 'HTML', 'CSS']}
                />
                <SkillCard
                    category="Frameworks & Libraries"
                    skills={['Next.js', 'React', 'Express', 'Tailwind CSS']}
                />
                <SkillCard
                    category="Databases"
                    skills={['MongoDB', 'PostgreSQL']}
                />
                <SkillCard
                    category="Tools"
                    skills={['Git', 'GitHub', 'Vercel', 'VS Code']}
                />
            </div>
        </main>
    );
}
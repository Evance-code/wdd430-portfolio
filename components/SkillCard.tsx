interface SkillCardProps {
    category: string;
    skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
    return (
        <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">{category}</h3>
            <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <li
                        key={skill}
                        className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}
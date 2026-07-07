import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'CSE 341 Contacts API',
    description: 'A CORS-enabled REST API built with Node.js and Express, connected to MongoDB Atlas for storing and managing contact records.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'CORS'],
    link: 'https://cse341-contactsproject-jpvp.onrender.com'
  },
  {
    title: 'CSE 340 Service Network',
    description: 'A full-stack web application with MVC architecture, user authentication, session management, and admin CRUD features, built with Node.js, Express, and PostgreSQL.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'EJS'],
    link: 'https://cse340-course-repo-eauh.onrender.com'
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a software development student learning Next.js and full-stack development. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
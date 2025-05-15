
interface templateCardProps {
    title: string;
    description: string;
    path: string

}

export default function TemplateCard({ title, description, path }: templateCardProps) {
    return (
      <div className="border max-w-[400px] bg-white rounded-sm p-4 hover:shadow-md transition">
        <div className="border bg-gray-100 h-40 mb-4">
          {/* <img src={path} alt={title} className="rounded-md flex h-full w-full" /> */}
          <span className="text-3xl text-gray-400">404</span>
        </div>
        <h3 className="font-bold text-sm ">{title}</h3>
        <p className="text-gray-600  w-[200px] mt-2">{description}</p>
        <div className="flex justify-between">
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">#Tag1</span>
            <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">#Tag2</span>
          </div>
          <a href={path} className="mt-4 inline-block text-sm  hover:underline">
            Demo →
          </a>
        </div>
        
      </div>
    );
  }
import Image from "next/image"
import Link from "next/link"

type PropertyTypeProps = {
   icon: string
   title: string
   count: string
}

const PropertyTypeCard = ({ icon, title, count }: PropertyTypeProps) => {
   return (
      <Link href={`/property-type/${title.toLowerCase()}`}>
         <div className="border border-dashed border-emerald-200 bg-emerald-50/50 rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
            <div className="relative w-24 h-24 mb-4">
               <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-400"></div>
               <div className="absolute inset-2 flex items-center justify-center">
                  <Image src={icon || "/placeholder.svg"} alt={title} width={48} height={48} className="text-emerald-500" />
               </div>
            </div>
            <h3 className="text-lg font-bold text-navy-800 mb-1">{title}</h3>
            <p className="text-emerald-500">{count} Properties</p>
         </div>
      </Link>
   )
}

export default function PropertyTypes() {
   const propertyTypes = [
      {
         icon: "/images/icon-apartment.png",
         title: "Apartment",
         count: "123",
      },
      {
         icon: "/images/icon-villa.png",
         title: "Villa",
         count: "123",
      },
      {
         icon: "/images/icon-house.png",
         title: "Home",
         count: "123",
      },
      {
         icon: "/images/icon-luxury.png",
         title: "Office",
         count: "123",
      },
      {
         icon: "/images/icon-building.png",
         title: "Building",
         count: "123",
      },
      {
         icon: "/images/icon-neighborhood.png",
         title: "Townhouse",
         count: "123",
      },
      {
         icon: "/images/icon-condominium.png",
         title: "Shop",
         count: "123",
      },
      {
         icon: "/images/icon-search.png",
         title: "Garage",
         count: "123",
      },
   ]

   return (
      <section className="py-16 bg-emerald-50/50">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-4xl font-bold text-navy-800 mb-4">Property Types</h2>
               <p className="text-gray-600 max-w-3xl mx-auto">
               Discover a place where comfort meets convenience. Whether you're looking for a spacious house in a peaceful neighborhood or a modern apartment close to top schools and amenities, we help you find the ideal home tailored to your family's needs. Start your journey to a better living space today!
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
               {propertyTypes.map((type, index) => (
                  <PropertyTypeCard key={index} icon={type.icon} title={type.title} count={type.count} />
               ))}
            </div>
         </div>
      </section>
   )
}

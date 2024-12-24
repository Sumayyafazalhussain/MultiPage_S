
import React from 'react'

const page = () => {
  const watchData = [
    {id: 1, name: "Everly: Leather Tote", price:159.99, description: "Ideal for carrying laptops", image: "/p1.webp"},   
    {id: 2, name: "Chloe: Crossbody Bag", price: 89.99, description: "Great for quick trips to the store, coffee dates, or sightseeing.", image: "/p2.webp"}, 
    {id: 3, name: "Ava: Evening Clutch", price: 59.99, description: "The perfect accessory for evening wear,for lipstick and a phone.", image: "/p3.webp"}, 
    {id: 4, name: "Nova: Convertible Backpack", price: 139.99, description: "Ideal for busy days.", image: "/p4.webp"}, 
    {id: 5, name: "Mila: Boho Fringe Shoulder Bag", price: 79.99, description: ": Great for casual outings, beach trips, or concerts with a bohemian flair.", image: "/p5.jpeg"}, 
    {id: 6, name: "Luxe: Quilted Chain Bag", price: 99.99, description: "Perfect for formal evenings or a night out, holding essentials like your phone and makeup.", image: "/p6.jpg"},
    {id: 7, name: "Harper: Leather Briefcase ", price: 199.99, description: "A must-have for the office, meetings, and business travel..", image: "/p7.webp"},
    {id: 8, name: "Sophie: Organizer Tote ", price: 139.99, description: " Great for daily commutes, holding everything from your laptop to notebooks..", image: "/p8.webp"},

    {id: 9, name: "Wanderlust: Travel Duffel", price:159.99, description: "Ideal for packing clothes, shoes, and toiletries for quick getaways.", image: "/p9.jpg"},

];
return (
    <div>
      <div className='watches'>
        {watchData.map((watch)=>(
          <div key={watch.id} className='watch-card'>
           <img src={watch.image} alt={watch.name}/>
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
         <div>${watch.price}</div>
         <button>Add to Cart</button>

          </div>

        ))}
      </div>

    </div>
  )
}

export default page
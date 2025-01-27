import React from 'react'

function Card({userName="Rembo", someObj, newArre}) {
    console.log(userName)
    return (
        <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
    <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/28712681/pexels-photo-28712681/free-photo-of-serene-sunset-over-power-lines-in-catalca.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
    </div>
    <div className="flex items-center md:items-start">
      <span className="text-2xl font-medium">{userName}</span>
      <span className="font-medium text-sky-500">The Anti-Patterns</span>
       <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
        <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
       </span>
     </div>
    </div>
    )
}
// function Card(props) {
//     console.log(props.userName)
//     return (
//         <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
//     <div>
//     <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/28712681/pexels-photo-28712681/free-photo-of-serene-sunset-over-power-lines-in-catalca.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
//     </div>
//     <div className="flex items-center md:items-start">
//       <span className="text-2xl font-medium">{props.userName || "Rembo"}</span>
//       <span className="font-medium text-sky-500">The Anti-Patterns</span>
//        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
//         <span>No. 4</span>
//       <span>·</span>
//       <span>2025</span>
//        </span>
//      </div>
//     </div>
//     )
// }

export default Card

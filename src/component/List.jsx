import React from "react";
// without using key props
// const List = () => {
//   const members = [
//     "Truket Lema",
//     "Eyoab shemsu",
//     "Tadesse Zelalem",
//     "Hewan Solomon",
//     "Hawdiya Abdella",
//     "fikir addis",
//     "Eden Bekalu",
//     "Edlawit sirak",
//     "Abenezer Mulugeta",
//     "Dagmawit Harka",
//   ];
//   return (
//     <div>
//       <h3>Group Members</h3>
//       <ol>
//         {members.map((member) => {
//           return <li>{member}</li>;
//         })}
//       </ol>
//     </div>
//   );
// };

// export default List;

const List = ({ members }) => {
  // with using key props which makes our code efficient
  return (
    <div>
      <h3>Group Members</h3>
      <ol>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ol>
    </div>
  );
};

export default List;

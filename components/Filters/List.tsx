import styles from "./List.module.css";

const categories = [
  { cat: "Fiction", num: 32 },
  { cat: "Non-Fiction", num: 23 },
  { cat: "Horor", num: 15 },
  { cat: "Fantasy", num: 47 },
  { cat: "Adventure", num: 78 },
  { cat: "Science", num: 104 },
  { cat: "Politics", num: 34 },
  { cat: "Survival Guide", num: 11 },
  { cat: "Do-It-Youself", num: 34 },
  { cat: "Social-Science", num: 11 },
  { cat: "Languages", num: 34 },
  { cat: "Cuisine", num: 11 },
  { cat: "Parenting", num: 34 },
  { cat: "Religion", num: 11 },
];

interface IList {
  heading: string;
  notification?: string;
}

const List: React.FC<IList> = ({ heading, notification }) => {
  return (
    <div className="py-5">
      <h3 className="font-FiraSans_Medium mb-4">{heading}:</h3>
      <div className="text-gray-400 text-xs mb-4">{notification}</div>
      <ul
        className={`text-[15px] w-48 h-64 overflow-y-auto scroll ${styles.list}`}
      >
        {categories.map((c, idx) => (
          <li className="py-[3px]" key={idx}>
            {c.cat} <span className="text-gray-400">({c.num})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

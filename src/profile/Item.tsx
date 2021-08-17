export type ItemProps = {
  name: string;
  value: string;
};

const Item = ({ name, value }: ItemProps) => {
  return (
    <div>
      {name}: {value}
    </div>
  );
};

export default Item;

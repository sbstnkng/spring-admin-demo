type Props = {
  record?: {
    title: string;
  };
};

export const PostTitle = ({ record }: Props) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

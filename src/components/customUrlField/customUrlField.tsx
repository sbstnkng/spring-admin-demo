import { useRecordContext } from 'react-admin';

type Props = {
  source: string;
};

export const CustomUrlField = ({ source }: Props) => {
  const record = useRecordContext();
  const url: string = record[source];
  return record ? <a href={url}>{url}</a> : null;
};

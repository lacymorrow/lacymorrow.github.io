import Ruffle from "@/components/flash/ruffle";
import capitalize from "@/utils/capitalize";

type Props = {
  name: string;
  params?: string;
  width?: string | number;
  height?: string | number;
};

export const Flash = ({ name, width, height, params }: Props) => {
  const w = width && `${String(width)}px`;
  const h = height && `${String(height)}px`;
  return (
    <div className="mt-8">
      <Ruffle
        src={`/flash/${name}.swf?${params}`}
        style={{ width: w, height: h }}
      />
    </div>
  );
};

export default Flash;

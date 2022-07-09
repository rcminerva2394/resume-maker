// NOTE
// A Neat hack to use spread operator for defining default props of HTML element
// Pero dont use it often because it may cause confusion to others
const Input = ({ inData }) => <input {...inData} />;

export default Input;

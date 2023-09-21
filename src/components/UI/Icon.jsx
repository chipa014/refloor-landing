import Icons from "/src/assets/sprite.svg";

const Icon = function (props) {
  return (
    <svg className={props.className}>
      <use xlinkHref={`${Icons}#icon-${props.iconName}`} />
    </svg>
  );
};

export default Icon;

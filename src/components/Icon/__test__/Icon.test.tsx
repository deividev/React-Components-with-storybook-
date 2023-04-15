import { render } from "@testing-library/react";
import Icon from "../Icon";

test("Render icon component correctly", () => {
  const { container } = render(<Icon icon={"cart_shopping"} />);
  expect(container).toBeInTheDocument();
});

test("Render icon component to snapshot", () => {
  const { container } = render(<Icon icon={"cart_shopping"} />);
  expect(container).toMatchSnapshot();
});

it("should render with the correct styles to add props.color", () => {
  const nameIcon = "cart_shopping";
  const { getByTestId } = render(<Icon color="red" icon={nameIcon} />);
  const svgIcon = getByTestId(nameIcon);
  const paths = svgIcon.querySelectorAll("path");
  const secondPath = paths[1];
  expect(secondPath.getAttribute("fill")).toBe("red");
});

it("should render with the correct styles to add props.className", () => {
  const nameIcon = "cart_shopping";
  const className = { fill: "red" };
  const { getByTestId } = render(
    <Icon className={className} icon={nameIcon} />
  );
  const svgIcon = getByTestId(nameIcon);
  const paths = svgIcon.querySelectorAll("path");
  const secondPath = paths[1];
  expect(secondPath.getAttribute("fill")).toBe("red");
});

it("should render with the correct styles to add props.className not property fill", () => {
  const nameIcon = "cart_shopping";
  const className = {};
  const { getByTestId } = render(
    <Icon color="red" className={className} icon={nameIcon} />
  );
  const svgIcon = getByTestId(nameIcon);
  const paths = svgIcon.querySelectorAll("path");
  const secondPath = paths[1];
  expect(secondPath.getAttribute("fill")).toBe("red");
});

it("should render with the correct styles to default color", () => {
  const nameIcon = "cart_shopping";
  const className = {};
  const { getByTestId } = render(
    <Icon className={className} icon={nameIcon} />
  );
  const svgIcon = getByTestId(nameIcon);
  const paths = svgIcon.querySelectorAll("path");
  const secondPath = paths[1];
  expect(secondPath.getAttribute("fill")).toBe("black");
});

import {
  getByPlaceholderText,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import List from "./List";

describe("List Component", () => {
  it("should render list items", () => {
    const { getByText } = render(<List initialItems={["Ácmon", "Pinheiro", "Soares"]} />);

    expect(getByText("Ácmon")).toBeInTheDocument();
    expect(getByText("Pinheiro")).toBeInTheDocument();
    expect(getByText("Soares")).toBeInTheDocument();
  });

  it("should be able to add new item to the list", async () => {
    const { getByText, getByPlaceholderText } = render(<List initialItems={[]} />);

    const inputElement = getByPlaceholderText("Novo item");
    const addButton = getByText("Adicionar");
    await userEvent.type(inputElement, "Flamengo");
    await userEvent.click(addButton);

    expect(getByText("Flamengo")).toBeInTheDocument();
  });

  it("should be able to remove a item from the list", async () => {
    const { getByText, getAllByText } = render(<List initialItems={["Ácmon"]} />);

    const removeButtons = getAllByText("Remover");
    userEvent.click(removeButtons[0]);

    await waitForElementToBeRemoved(() => {
      return getByText("Ácmon");
    });
  });
});

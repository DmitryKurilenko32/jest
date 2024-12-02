const sorting = require("../../app");

describe("Books names test suit", () => {
  test("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const actual = sorting.sortByName(input);
    expect(actual).toEqual(expected);
  });
  test("1 book", () => {
    const input = ["Гарри Поттер", "Гарри Поттер"];

    const expected = ["Гарри Поттер", "Гарри Поттер"];

    const actual = sorting.sortByName(input);
    expect(actual).toEqual(expected);
  });
});

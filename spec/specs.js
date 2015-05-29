describe("findAndReplace", function() {
  it("finds and replaces a given word in a string", function() {
    expect(findAndReplace("There is a tree.", "tree", "shrub")).to.eql("There is a shrub.");
  });
});

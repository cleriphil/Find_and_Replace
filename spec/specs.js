describe("findAndReplace", function() {
  it("finds and replaces a given word in a sentence", function() {
    expect(findAndReplace("There is a tree", "tree", "shrub")).to.equal("There is a shrub");
  });
  it("finds and replaces a repeated word in a sentence", function() {
    expect(findAndReplace("There is a tree tree tree", "tree", "shrub")).to.equal("There is a shrub shrub shrub");
  });
  it("finds and replaces a word in a sentence with captialization", function() {
    expect(findAndReplace("There is a tRee Tree TREE", "tree", "shrub")).to.equal("There is a shrub shrub shrub");
  });
  it("finds and replaces a word in a sentence with punctuation", function() {
    expect(findAndReplace("There is a tree! tre*e t??ree!~~~!", "tree", "shrub")).to.equal("There is a shrub shrub shrub");
  });
});

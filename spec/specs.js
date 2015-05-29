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
    expect(findAndReplace("There is a tree*^% tre*e t%%ree!~~~!", "tree", "shrub")).to.equal("There is a shrub shrub shrub!!");
  });
  it("finds and replaces a word in a sentence with punctuation and keeps the period, exclamation point and question mark", function() {
    expect(findAndReplace("There is a tre&&e tre*e... tre@#e!?", "tree", "shrub")).to.equal("There is a shrub shrub... shrub!?");
  });
  it("finds and replaces a word in a sentence with punctuation and keeps apostrophes and commas", function() {
    expect(findAndReplace("There is a tree's tree, \"tree\"", "tree", "shrub")).to.equal("There is a shrub's shrub, \"shrub\"");
  });
  it("replaces a word that has an apostrophe after it", function() {
    expect(findAndReplace("Sylvester's tree is green.", "sylvester", "Oliver")).to.equal("Oliver's tree is green.")
  });
  it("replaces a word with a multiple word phrase", function() {
    expect(findAndReplace("There is a tree", "tree", "green tree")).to.equal("There is a green tree");
  });
});

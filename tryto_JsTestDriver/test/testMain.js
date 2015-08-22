TestCase("myFunction Test", {
    "test myFunction-1": function () {
        assertEquals(2, myFunction(1));
    },
    "test myFunction-2": function () {
        assertEquals(0, myFunction(0));
    }
});
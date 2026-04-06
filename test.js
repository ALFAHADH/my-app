console.log("Running tests...");

const testValue = 5;

if (testValue === 5) {
    console.log("Test Passed ✅");
    process.exit(0);
} else {
    console.log("Test Failed ❌");
    process.exit(1);
}

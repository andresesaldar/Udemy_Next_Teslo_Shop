db = db.getSiblingDB("products");

db.createCollection("products");
db.products.remove({});

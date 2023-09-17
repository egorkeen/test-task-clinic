module.exports = {
  "transformers": {
    "*.css": ["@parcel/transformer-css", "..."],
    "*.scss": ["@parcel/transformer-sass", "..."]
  },
  "optimizers": {
    "*.css": ["@parcel/optimizer-cssnano"] 
  }
}
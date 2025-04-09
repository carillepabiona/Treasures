using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Treasure.Models
{
    public class FoodItem
    {
        public string Name { get; set; }
        public string Category { get; set; }  // Category that the item belongs to
        public string Image { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
    }


}

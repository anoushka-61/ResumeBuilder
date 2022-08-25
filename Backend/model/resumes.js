const mongoose = require('mongoose');
let resume = new mongoose.Schema({
    userid:{type:'String'},
   
    
    fname: { type: 'String',    },
    pnumber: { type: Number,    },
    email: { type: 'String',    },
    lid: { type: 'String',    },
    city: { type: 'String',    },
    state: { type: 'String',    },
    country: { type: 'String',    },
    objective: { type: 'String'},
    // tsname: { type: 'String',    },
    // tboard: { type: 'String',    },
    // tyear: { type: Number,    },
    // tpercentage: { type: Number,    },

    // twsname: { type: 'String',    },
    // twboard: { type: 'String',    },
    // twyear: { type: Number,    },
    // twpercentage: { type: Number,    },

    // ugname: { type: 'String' },
    // ugdegree: { type: 'String' },
    // ugspecialisation: { type: 'String' },
    // ugsyear: { type: Number },
    // ugeyear: { type: Number },
    // ugmarks: { type: Number },

    // pgname: { type: 'String' },
    // pgdegree: { type: 'String' },
    // pgspecialisation: { type: 'String' },
    // pgsyear: { type: Number },
    // pgeyear: { type: Number },
    // pgmarks: { type: Number },


    tenth:{type:Object},
    twelvth:{type:Object},
    ug:{type:Object},
    pg:{type:Object},
    work:{type:Array},

    skill: { type: Array,  },
    projects:{type:Array},

    certificate:{type:Array},
     
    update_data:{type:"String"},
    image:{type:Boolean}

})
module.exports = Resumes = mongoose.model("resumes", resume);
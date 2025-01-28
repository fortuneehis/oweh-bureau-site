import express,{Request,Response} from 'express'
import serverless from 'serverless-http';
import 'colors'
import expressLayouts from 'express-ejs-layouts'
import path from 'path'

const app = express()
const NODE_ENV = process.env['NODE_ENV']
console.log('NODE_ENV', NODE_ENV)

// Set EJS as the view engine
app.use(expressLayouts)
app.set('view engine', 'ejs');

// Set views directory based on environment
if (NODE_ENV === "production") {
    app.set('views', path.join(__dirname, 'views'));
} else {
    app.set('views', path.join(process.cwd(), 'views'));
}

app.use(express.static('public'));

// Middleware to handle path rewriting in production
if (NODE_ENV === "production") {
    app.use((req, res, next) => {
        // Get the original path from query parameter
        const originalPath = req.query.path || req.path;
        // Remove the path from query to not interfere with route handling
        delete req.query.path;
        // Set the correct URL
        req.url = '/' + (originalPath === '/' ? '' : originalPath);
        next();
    });
}

app.use((req,res,next)=>{
    console.log(`${req.method} | ${req.url}`.yellow)
    next()
})


const render = function (req:Request,res:Response,page:string,options?: Record<string,any>){
    console.log(`${req.path}->`,page)
    res.render(page,{
        pageTitle: `Oweh Bureau | ${options?.description || page}`,
        path: req.path,
        layout: './layout',
        params: req.params,
        query: req.query,
        ...options
      })
}


app.get('/',(req,res)=>{
    render(req,res,'index',{
        description: 'Security and Profiling Agency'
    })  
})
app.get('/careers',(req,res)=>{render(req,res,'careers')})
app.get('/application',(req,res)=>{render(req,res,'application')})
app.get('/contact',(req,res)=>{render(req,res,'contact')})
app.get('/appointment',(req,res)=>{render(req,res,'appointment')})
app.get('/profile-details',(req,res)=>{render(req,res,'profile-details')})
app.get('/quote',(req,res)=>{render(req,res,'quote')})

app.use((req,res)=>{
    render(req,res,'404',{
        description: 'Lost But Found'
    })
})



const PORT = process.env['PORT'] || 3000

let handlerFunc = null

if(NODE_ENV=="production"){

    handlerFunc = serverless(app);
}
else{

    app.listen(PORT,()=>{
        console.log('listening on port',PORT)
    })
}

export const  handler = handlerFunc
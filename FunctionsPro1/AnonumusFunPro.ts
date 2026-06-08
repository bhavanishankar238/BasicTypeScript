function Playername(name : string): void
{
    console.log(name);
}
Playername("Kohli");

function Playergame(game : (name: string)=>void) :void
{
    game("Cricket");// to know game we are calling the function.

}
Playergame(Playername);// calling function under anotrher function.
#include <iostream>
using namespace std;

void function1(int x)
{
    if(x > 0)
    {
        cout<<"function1 Step 1"<<endl;
        cout<<"function1 Step 2"<<endl;
        cout<<"function1 Step 3"<<endl;
    }
    
    function1(x - 1);
    cout<<"Main Function Step 4, after recursion"<<endl;
}
 
int main()
{
    cout<<"Main Function Step 1"<<endl;
    cout<<"Main Function Step 2"<<endl;
    cout<<"Main Function Step 3"<<endl;
    function1(3);
    //cout<<"Main Function Step 4, after recursion"<<endl;
    
    return 0;
}

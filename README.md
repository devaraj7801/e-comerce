# Title
    * E-commerce Website
    

## Objective

    * user can use this application and flexible

## Tech Stack

   Use ReactJs,React Router,React Context API,CSS frameworks,Git and Gitup for hosting repositry

## Completion Instructions


### Functionality
#### Must Have
  * Build a React Js application with multiple components
  * Implement features such as Products Search,product details,add to cart,remove from cart,cart summary of total items and total price and order placement.

  Pages 
      * page:Home 
        Page Details:
          Header - links for pages Home,Product List,Cart
        Navigation:

      * Page:Products List
        Page Details:
           Header - links for pages Home,Product List,Cart,
          Product items,Search,
        Navigation:
          "Product List" link Header,
          "Back Button" in Book Detail Page

      * page: Product Details
        Page Details:
          Product details Info, "Add to cart" Button,"Back" Button
        Navigation:
          Each Product in the product list page

      * Page: Cart
        Page Details: 
          Cart Items, "Remove" Button, Order Summary,Checkout Button
        Navigation:
          "Cart" link in Header,
          "Back" button in Checkout page


      * page : Checkout
        Page Details:
          Back Button,Order form (Personal details,Summary,place order button)
        Navigation:
          Check out page 

#### Nice to Have

  * loght theme
  

### Submission Instructions
  * Login Route => {
    >>form (
        >> username,password
        >>button \\ type{submit} => onClick {
            >> userCredentials(username,pasword)
            >>apiUrl = ( https://apis.ccbp.in/login)
            >> method = post
            >> body(userCredentials)
            >>if(responce.ok === true){
                  >>sucess view(
                    >>histroy.replace(/) => this.props 
                    >>Cookies,Redirect(react-router-dom)
                  )
            }
            >> if(responce.status === 404){
                >>failureView => {
                    \\ data(error-msg)
                    \\ update showErrorMsg
                }
            }
        }

        >> check box 
        >>show Paasword
        >>error-msg(show)\\ (p)
        >>chenage to Home{/} = route
    )
  }

  * Header => {
    >> navBar (
        >> Logo img => link to (/)
        >> Light theme Icon => (click) \\ context store theme
        >> user Profile
        >>  Logout Button (
            >> pop-up => {
                trigger = logout(button)
                colse = (
                    cancel,confirm
                    confirm => (
                        => histroy.replace(./login),
                        => Cookies.remove()

                    )
                )
            }
            )
    )
  }

  * Home Route => {
    >> Header 
    >> videos
    >> options Videos

  }

  * videos => {
     
     >> searchInpu t
     >> componentDidMount 
     >> switch(condition)
     >> apiUrl = `https://apis.ccbp.in/videos/all?search='
     >> fetch(apiUrl \\ query_param(search-quey)) => {
        ** options ** => {jwtToken}
        => Loading view (Loader)
        => state \\ filterdData (responce.ok){
            data.videos.map()
        }
        => success view {
          (dataList.length > 0) ? ()
                // No search Result => {
                    => No result IMg
                    => heading
                    => paragraph
                    => Retry(button) \\ (click) = (searchInput = '')
                }
                // videos Item(vides DATA)
        }
        => failure View (
            => failure IMg
            => heading
            => paragraph
            => Retry(button) \\ (click) = call fetchData
        )
     }
  }

  * video Item => {
    >> filterdData 
    >>Link(/videos/:${id})
  }


  * video Item Details => {
    >> Loading(Three dots)
    >>match.params.id
    >> componentDidMount
    >>apiUrl =  https://apis.ccbp.in/videos/:id
    >> cookies(jwtToken)
    >> options(method,headers)
    >> if(responce.ok) \\ filterdData(channel)
    >> updated to (videoDetails Data)
    >> icons(Like,dislike,SaveVideo)
    >> SaveVideo = (click) => { 
        context.consumer() = savedList(add)
        
    }
  }

  * Options Videos => {
     >> icons(home,trending,gaming,savedList)
     >><Link>
        =>Home(/)
        =>Trending
        =>Gaming
        =>SavedList(saved-videos)
     </Link>
     >> contact Us(other Componet)
  }

  * Trending Route => {
     >> componentDidMount
     >> Loading(Three Dots)
     >>Cookies
     >>apiUrl =  https://apis.ccbp.in/videos/trending
     >>options(
         method = 'GET'
         headers:{
            Authorization: Bearer ${jwtToken}
         }
     )
     >>fetch(apiUrl) => {
        >>if(responce.ok) => (
            >> state(trendingVideoLists)
             >> filterdData.videos.map() \\ channel
             >> videoItem(data)
        )
        >> failure view
     }
  }

  * Gaming Route => {
     >> componentDidMount
     >> Loading(Three Dots)
     >>Cookies
     >>apiUrl =  https://apis.ccbp.in/videos/gaming
     >>options(
         method = 'GET'
         headers:{
            Authorization: Bearer ${jwtToken}
         }
     )
     >>fetch(apiUrl) => {
        >>if(responce.ok) => (
            >> state(trendingVideoLists)
             >> filterdData.videos.map() \\ channel
             >> videoItem(data)
        )
        >> failure view
     }
  }


  * Saved List => {
    >>context.consumer
    >>savedList.map()
    >>videoItem.click(videoItemDetails)
    >>Loader
  }


  * NotFound Route => {
    >>theme accoriding
    >>random-path
  }



#### Must Have

    

#### Nice to Have

    List the suggested instructions to follow while submitting the project mentioned in the Assignment, if any

## Resources

### Design files

    List the references of design files required for the Assignment

### APIs
    * https://fakestoreapi.com/docs

### Third-party packages

    List the Third-party packages required for the Assignment, if any

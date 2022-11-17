<script setup lang="ts">

</script>

<template>
  <Navbar />
  <div class="s-content content">
            <div class="row content__page">
                <div class="bg-content">
                    <img class="img-page" src="https://monngondathanh.com/wp-content/uploads/2017/07/Waterfront-Danang-Restaurant-Bar-Da-Nang-min.jpg" 
                                             alt="" >
                </div>
                    <div class="content__page-header entry__header">
                        <h1 class=" entry__title">
                        Restaurant A
                        </h1>
                        
                    </div>  

                    <div class="entry__content">

                        <p class="lead drop-cap">
                        Duis ex ad cupidatat tempor Excepteur cillum cupidatat 
                        fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation 
                        incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor 
                        dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui 
                        labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua 
                        ea nisi sint.
                        </p>

                        <p>
                        Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat 
                        dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit 
                        id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit 
                        nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam 
                        consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut 
                        dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim 
                        veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim 
                        aliqua laborum mollit quis nostrud sed sed.
                        </p>

                        <img class="img-page" src="https://vietnamdiscovery.com/wp-content/uploads/2019/10/Sky-View-Restaurant.jpg" 
                             alt="" />
                       
                        <h2>Large Heading</h2>
    
                        <p>
                        Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum 
                        soluta nobis est eligendi optio cumque nihil impedit quo minus 
                        <a href="http://#">omnis voluptas assumenda est</a> id quod maxime placeat 
                        facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut 
                        officiis debitis aut rerum necessitatibus saepe eveniet ut et.
                        </p>
    
                        <blockquote>
                            <p>
                            For God so loved the world, that he gave his only Son, that whoever believes in 
                            him should not perish but have eternal life. For God did not send his Son into 
                            the world to condemn the world, but in order that the world might be 
                            saved through him.
                            </p>
                            <cite>John 3:16-17 ESV</cite>
                        </blockquote>
    
                        <p>
                        Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque 
                        corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
                        similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam 
                        venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim 
                        cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing 
                        in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                        </p>
    
                        <h3>Smaller Heading</h3>
    
                        <p>
                        Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque 
                        corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
                        similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam 
                        venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim 
                        cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing 
                        in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                        </p>



                        <p>
                        Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque 
                        corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
                        similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam 
                        venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim 
                        cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing 
                        in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                        </p>
        
                        <p>
                        Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque 
                        corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
                        similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam 
                        venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim 
                        cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing 
                        in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                        </p> 
                    </div> <!-- end entry content -->
               
            </div>

        </div> 
  <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
      <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
        <div className="relative flex-shrink-0 w-24 h-24 mt-1 ">
            <img
              src='https://cdn-icons-png.flaticon.com/512/219/219969.png'
              objectFit="cover"
              alt={author.name}
              placeholder="blur"
              layout="fill"
              className="rounded-full"
            />
        </div>
        <div>
          <div className="mb-3">
            <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              About Kim Loi
            </h4>
          </div>
          <div>
            Kim Loi comes from Da Nang. She studies in Da Nang University of Technology and Science.  
          </div>
          <a href="#">View Profile</a>
        </div>
      </div>
    </div>
 <Footer />
</template>

<style scoped>
.bg-content{
    text-align: center;
}
.img-page{
    width: 800px;
    margin: auto auto;
}
.content__page {
  padding-bottom: 12px;
  padding-top: 20px;
  background: white;
}
h1{
    font-size: 6em;
    color: black;
}
h2,h3{
    font-size: 2em;
    color: black;
}
p{
    font-size: 1.3em;
}
.entry__header{
    text-align: center;
}
.entry__content{
    padding-left: 100px;
    padding-right: 100px;
    text-align: justify;
}
.drop-cap:first-letter {
  float: left;
  margin: 0;
  padding: 1.6rem 0.8rem 0 0;
  font-family: "Lora", serif;
  font-weight: 700;
  font-size: 8.8rem;
  line-height: 6rem;
  text-indent: 0;
  background: transparent;
  color: #000000;
}
</style>


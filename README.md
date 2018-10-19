# Frontend-applications


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

---

## Proces

### Week Uno

* **Monday**
   * Introduction tot the project.
   * Getting to know each other doing different types of weird exercises.
   * Drinking a bit to much beers.

* **Tuesday**
  * 'Get to know' presentations about Vue, React and Angular.
  * Bootcamp javascript from Titus.
  * A lot of time to think about a framework to work with the coming two weeks. My first pick was Vue.

* **Wednesday**
  * Presentation about working with npm and node modules etc.
  * Got Vue as my framework to work with.
  * Started sketching some screens to get started. Made a small mock-up to set the idea of the app straight for myself.
  * Watched some tutorials about github and tried some command line typing in the terminal and installing packages with npm. It was really nice to have the github cheatsheat next to me which really helped me.
  * Setup bash_profile aliases, Special thanks to Dennis. Now it's way easier for me to get to the root folder and to get to my porjects. At the end of the day I added some more to make my life a lot easier.

* **Thursday**
   * Bought vuejs-2-the-complete-guide from Udemy.com in which Max Millian explains how to start working with the Vue framework. It's really nice that it's done from a beginners perspective, what really helped me.
   * Watched it the whole day and typed along to get used to the code Learned about v-binds and v-on and how easy it is to use it.
   * Tried a clean install of vue.
   * Screwed up.
   * Got help from Daniel2 and Marcel and wrote down how to do it.

* **Friday**
   * Had a talk with Titus about my progression. Conclusion: Its better for me to focus on the form and the it is designed than to focus on the other features. So I did.
   * Made new sketches of the form page and I think I have a good idea for my app now.
   * Watched a new tutorial Daniel recommended me about learning Vue in 60 minutes. I wrote along to make a to-do list in which all the Vue methods were shown. Im really amazed about how easy it works. The whole tutorial took me about 60 minutes more.

* **Saturday**
   * Nothin.

* **Sunday**
   * Made a start on the Project.
   * added SSH key.
   * Made my first commit.
   * Setup my README file.
   * Setup todo list for the upcoming week.

### To-do upcoming week

- [X] sketching down the parts the form needs to continue.
- [X] Start buildup of the form and the connection between the questionair and the form.
- [X] Validation of the code and showing the end result in percentages.
- [X] All the way at the end, looking at visual styling of the app.
- [ ] Maybe add some extra features to the app.


**Ideas and Possible features**

   * If an input is not filled in or checked show it in colors etc.
   (Added this feature to the login screen, I know how it works now)
   * Possibility to add extra notes to a file.( I changed the to-do list tot work as this feature, which actually works quite nice)
   * Possibility to send the notes data to the local storage(Couldn't find out how to do this. something to learn in the future.)
   * Possibility to mark an input as "very important" to show that question before a next visit to the client.(Stil a big feature in mmy concept but I have no idea how to do that)
   * Possibility to watch a file anonymously or to login if you have a higher rank to watch more detailed info about the client.

### Second week

* **Monday**
   * Had a presentation from the people who could use an app like the one we are making. They told us about the way of working and the steps that need to be taken for someone to get removed from the household.
   * Made a quick design of the form page and the menu that I want to make in combination with the router.
   * Added sass to the project with npm. First read some documentation and after that implemented it. Its really easy to do in Vue.
   * Set-up the menu from the design and i'm really happy with the way it looks, even though its not that important. Im really amazed about how easy the Vue router works.
   * Started with the build-up of the risk indication page which was really easy now i'm used to work with the router. Added the tiles where the form inputs are going to be in.

* **Tuesday**
   * Continued the buildup of the risk indication page and made some minor adjustments to it.
   * Connected the data.json file to the project and tried to import it on the page. Now the issue started that I never worked with a Json file before so I had no clue how to start. I got a lot of help from Tim who made a filter to show every category only once if there are doubles. I get what he is writing down in code but know that it is way to hard for me to do that myself.
   * Tried to connect colors to the category tiles but failed.
   * Updated the README with Monday and Tuesday.

* **wednesday**
   * Missed the lecture I wanted to go to. Really smart.
   * I did some styling to make the app look a bit better that it did. After realizing I was getting to picky on the design I decided to stop and to continue with the code.
   * Made a login page with the help of Dennis. Learned how to make sure the user enters a username and password before logging in and how to show error messages. Because login.vue actually is a child of the parent app.vue and we wanted to pass the username to the app.veu page, we had to use an emitter which Dennis explained to me.
   * Tried to make a loop that takes all the colors out of an array and pushes it to the inline border-color, but sadly failed again. I made it work but now it generates the input fields with every color, after some advice I dropped doing that and went to bed.


* **Thursday**
   * Got accepted to do the minor webdev!
   * Wanted to start on the risk calculation but did not know how to start. I found out that the way I was working with the code it was not going to work so I got a new Json file from Luna May who made categories, which was easier to work with.
   * At the beginning of the day my hope in doing the calculation was gone. After getting help setting it up I had an epiphany how the v-for loops works and how it was connected and was even able to made some code work better. That gave me a good feeling.
   * I stayed untill 23:30 to work on the app and eventually got the calculation working with a lot of help from others peoples code. Somehow I understand what the code does and the way it refers to each other but writing it myself was to difficult. But I am sure that I can do a lot more if I have to work with Vue again.
   * Updated README for the last time so it is up to date for the presentation.


# What I learned this two weeks:

**Git**

Because i was completely new to working with github it was important for me to get to know it and the way the CLI works. Dennis Wegereef showed me how to connect github to setup new repositories and how to use commands like "git status, git add -A, git commit and git push". He also showed me how to make aliases in the .bash_profile file to make it a lot easier.

**Markdown language**

Because I wanted to get a good grade on my proces I learned how to work with markdown to set up a good README file. I found out how easy it is to do. But there's still more to learn.

**Vue framework and Npm**

I learned how to work with the Vue framework. I started of by watching a lot of tutorials how Vue handles its templating and how the code works in between them. I Bought a lesson bundle on Udemy.com that really helped me get to know the way Vue works and watched a tutorial about learning Vue in 60 minutes. which took me 2 hours. I learned how to work with v-for, v-on, v-bind, the double curly braces, v-model, about scoped css and how to use scss after installing packages with npm, which was also a mind blowing thing to learn because of how easy it is, routing, mounted, methods, computed, watch, etc etc.

I am really amazed about how nice the Vue framework works and really would like to learn a lot more about it.

**Connecting and reading a Json file**

Working with a Json file was also new for me. I never had to import a Json file before so it was really nice to learn it. It came to me on the last day but I now know how to get data from the Json file and how to use it.

**Calculations**

RThe calculations used in the App that I made are not coded by me. Well partly. Most of it is done by Tim and Dennis who really know what they are doing. Most of the code that they write is really understandable for me but I would not come up with it myself. Thats something I need to learn. Getting that "finding solutions like a coder" mindset.

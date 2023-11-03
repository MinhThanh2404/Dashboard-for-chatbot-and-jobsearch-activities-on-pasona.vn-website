<h1> Dashboard for chatbot and jobsearch activities on pasona.vn website </h1>
<h2> Table of content </h2>
<ol>
  <li><a href='#intro'>Introduction and source code structure</a> </li>
  <li><a href='#sourcecode'>Source code's brief explaination</a> </li>
</ol>

<h2 id='intro'> Introduction and source code structure </h2>
<div style="margin-left:40px;"> This dashboard demo is used to supervise chatbot and job search performance on pasona.vn website. The frontend design uses Vuetify2 library in Vue.js framework, reference from Materio, while the backend language is Python, with SQL as the query language. This repository has 2 main folders: backend and frontend. The dataset is private so it won't be uploaded here, I'll show the data schema instead. The instruction for execution and modifying has been noted in the README.md file found in each folder.</div> </br>

  The dashboard has 3 main dasboard pages: overview, chatbot, job search, and 3 data table pages: chatbot message history, job search history, customer information. There are some sub pages: log in, sign up, error, profile/setting. The index page is the login page, and when the user successfully logs in, the overview page will appear. The navigation pane is on the left side, showing directions to 2 other dashboards and the data table pages. If the user wants to back to the overview page, click on the company logo on the top of the left side. On the top right side, when clicking on the avatar, the user will see 2 options: setting and log out. There are 4 time phrases available to view the statistics: today, week, month, quarter, year. The default time is today. When the user chooses a time option, this value will be stored in the local storage and other pages' time component will be updated with this value. The time component will reset to default when the tab is closed or the page is refreshed.
<div align='center'>  
<p><img src='https://github.com/MinhThanh2404/Dashboard-for-chatbot-and-jobsearch-activities-on-pasona.vn-website/assets/126949248/b0f944aa-15bb-447f-9256-09e21acd2f15'/></p>
<p><i>login page</i></p>
<p><img src='https://github.com/MinhThanh2404/Dashboard-for-chatbot-and-jobsearch-activities-on-pasona.vn-website/assets/126949248/895451b7-9a29-433e-b8e0-1be6ae179419'/></p>
<p><i>overview page with navigation pane and user options</i></p>
<p><img src='https://github.com/MinhThanh2404/Dashboard-for-chatbot-and-jobsearch-activities-on-pasona.vn-website/assets/126949248/524460b7-97b8-42df-a266-14fd447c36f1'/></p>
<p><i>time component list</i></p>
</div>

<h3> Overview page </h3>
This page summarizes crucial metrics of both chatbot section and job search section. The user can click on the title of the section to be directed to the detailed dashboard of the chosen one. Moreover, each metric/card is contained in a card, which has a "Detailed" button getting to the data table page storing the relevant data of that element.
</br>In the chatbot section, the first metric, total users, indicates how many customers have interacted and sent messages chatbot; the second metric is total messages, calculating the amount of messages chatbot has received; the last one is the average rating score for the chatbot to express how much satisfied the customers generally feel when experiencing the service. 
<div align='center'>
  <p>
    <img src='https://github.com/MinhThanh2404/Dashboard-for-chatbot-and-jobsearch-activities-on-pasona.vn-website/assets/126949248/6647bf80-08f6-43c6-a429-b90e7f3612b2'/>
  </p>
  <p><i>overview-chatbot section</i></p>
</div>

</br>Below the chatbot section is the job search summary. This section includes the total of searchs, the distribution of each search fields and the real time search statistics. Due to the huge amount of data, the real time chart visual won't be displayed on the website, but the sample code has been inserted into the source.
<div align='center'>
  <p>
    <img src='https://github.com/MinhThanh2404/Dashboard-for-chatbot-and-jobsearch-activities-on-pasona.vn-website/assets/126949248/3f507e3c-4fcb-4a08-b609-994429292051'/>
  </p>
  <p>
    <i>overview-jobsearch section (total search and search options)</i>
  </p>
</div>

<h3> Chatbot dashboard page </h3>
In this dashboard, the characteristics of customers on the first row and inquiries patterns through the three remaining cards will be displayed. The new user semi-donut chart estimates the proportion of new users accounts for the total of chatbot user. The rentation rate refers to the percentage of customers who continue using the chatbot over a given timeframe. The satisfaction bar chart reflects the fluctuation of customers' overall exprerience in a week.
</br>
<div align='center'>
  <p>
    <img src='https://github.com/MinhThanh2404/Dashboard-for-chatbot-and-jobsearch-activities-on-pasona.vn-website/assets/126949248/b35d1f5c-8e40-4535-9d0f-25b19c925aa0'/>
  </p>
  <p>
    <i>chatbot dashboard - customer summary</i>
  </p>
</div>
For the message analysis, currently donut chart for topic distribution and line chart topic over time are currently used. Up to now, the chatbot topic has 3 categories: job vacancies, salary, and trivia. In the topic over time, only job vacancies and salary are selected for presentation, as the trivia class is used to identify spam message and cut down on the process time for this class. The last visual is word cloud to demonstrate the common words appearing in the message, however, the library is not supported in Vuetify 2, which leads to the blank visual.</br>
<div align='center'>
  <p>
    <img src='https://github.com/MinhThanh2404/Dashboard-for-chatbot-and-jobsearch-activities-on-pasona.vn-website/assets/126949248/405d3e78-690d-4809-8ea1-664537f8f3f9'/>
  </p>
  <p>
    <i>chatbot dashboard - message summary</i>
  </p>
</div>

<h3> Jobsearch dashboard page </h3>
In this dashboard, the first 3 charts show the overall perfomance of the search job tool, and the remaining cards focus on each search field. The search KPI semi-donut chart informs how much percentage of KPI team has achieved. The horizontal bar chart analyzes where the customers uses the search engine most, as the customers can use this tool when accesing the Job Page or using the chabot. The multi-label line chart summarizes the total of search on each field.
</br>
<div align='center'>
  <p>
    <img src='https://github.com/MinhThanh2404/Dashboard-for-chatbot-and-jobsearch-activities-on-pasona.vn-website/assets/126949248/b35d1f5c-8e40-4535-9d0f-25b19c925aa0'/>
    <img src='https://github.com/MinhThanh2404/Dashboard-for-chatbot-and-jobsearch-activities-on-pasona.vn-website/assets/126949248/af935afd-a460-4153-9e4d-a9076c6b613e'/>
  </p>
  <p>
    <i>jobseach dashboard - overall</i>
  </p>
</div>
The search engine has 5 fields: keyword, location, salary range, industry, language. Each field's performance will be displayed in a card. Word cloud chart for keyword field helps investigate which job titles candidates seek most, so that the marketing team can modify the ranking of job vacancies, and expand the client diversity. For the location field, geography chart will point out top 5 cities found most in the search engine.</br>
<div align='center'>
  <p>
    <img src='https://github.com/MinhThanh2404/Dashboard-for-chatbot-and-jobsearch-activities-on-pasona.vn-website/assets/126949248/141c311e-3fe2-4eef-abba-ce1c380c4406'/>
  </p>
  <p>
    <i>jobsearch dashboard - keyword and location chart</i>
  </p>
</div>
The salary range is displayed in the donut chart. The language distribution is displayed in horizontal line chart. Top 19 most searched industries are shown in tree map chart.</br>
<div align='center'>
  <p>
    <img src='https://github.com/MinhThanh2404/Dashboard-for-chatbot-and-jobsearch-activities-on-pasona.vn-website/assets/126949248/706d9230-cc68-46e4-8d0a-e75aefaed7f4'/>
  </p>
  <p>
    <i>jobsearch dashboard - keyword and location chart</i>
  </p>
</div>

<h3> Data table pages</h3>
In the data table page, on the left side of time component combobox is the "All" button, which retrieves the whole data in the table.
<div align='center'>
  <p>
    <img src='https://github.com/MinhThanh2404/Dashboard-for-chatbot-and-jobsearch-activities-on-pasona.vn-website/assets/126949248/1cd206f5-fb4c-4cc1-a009-3a81ed3c8a58'>
  </p>
  <p>
    <i>layout of data table page</i>
  </p>
</div>

<h2 id='sourcecode'> Source code's brief explaination </h2>
<ol>
<li><h3>Frontend</h3></li>
<p><b>Here's the source code structure:</b></p>
<div align='center'>
  <p>
<img src='https://github.com/MinhThanh2404/Dashboard-for-chatbot-and-jobsearch-activities-on-pasona.vn-website/assets/126949248/728516aa-02db-4b06-97da-2a5720c0bcc9'/>  
  </p>
  <p>
    <i>frontend source code structure</i>
  </p>
</div>
  
<ul>
  <li>Images are stored in <b>assets</b> folder.</li>
  <li>The design of core layouts (header, navigation pane, vertical menu) is stored in <b>layouts</b> folder. </li>
  <li>The design of layout for components (card) is stored in <b>components</b> folder.</li>
  <li>Endpoints are defined in index.js file in <b>routes</b> folder.</li>
  <li>The layout of pages are stored in <b>views</b> folder.</li>
  <li>Other sub pages like Log in, Register,... is stored in <b>pages</b> folder.</li>
</ul>
</br>
<p>To call the API from the backend server to get data, Vuex, a state management pattern + library for Vue.js applications, is applied. In the actions part, a function named getChartData is created to use axios method, with 2 params time component and visual name. This approach will cut down on the length of code lines by defining a function and reusing it many times, instead of repeating this part whenever calling the API to get data.</p>
<div align='center'>
  <p>
    <img src='https://github.com/MinhThanh2404/Dashboard-for-chatbot-and-jobsearch-activities-on-pasona.vn-website/assets/126949248/7d66a80d-0147-45c6-ae41-fa594b065cf2'/>
  </p>
  <p>
    <i>source code of Vuex actions</i>
  </p>
</div>
</br>
For usage, import the mapAcions to the layout files. In the methods part, declare the function getChartData in the actions part by the command "...mapActions(["getChartData"]),", declare a variable to call this.getChartData(), declaring 2 specific values for params and store retrieved data.</br>
<div align='center'>
  <p>
    <img src='https://github.com/MinhThanh2404/Dashboard-for-chatbot-and-jobsearch-activities-on-pasona.vn-website/assets/126949248/da148d6e-dcc2-4141-99f1-ea8ae94b7686'/>
  </p>
  <p><i>import object Vuex</i></p>
  <p>
    <img src='https://github.com/MinhThanh2404/Dashboard-for-chatbot-and-jobsearch-activities-on-pasona.vn-website/assets/126949248/cce82093-eac8-4ccf-9381-cd8f317e3672'/>
  </p>
  <p><i>call the getChartData() function</i></p>
</div>
  
<li><h3>Backend</h3></li>
The structure of the source code is arranged based on MVC model. API is built by Flask and registed by Blueprint in app.py file. Endpoint is defined in routes folder. In controller file, the data retrieved from the client will be extract and input to DashboardService() function, and return the queried data to send back to client. in dashboard_service.py, steps to create SQL queries and process output data are defined.  
<div align='center'>
  <p>
    <img src='https://github.com/MinhThanh2404/Dashboard-for-chatbot-and-jobsearch-activities-on-pasona.vn-website/assets/126949248/ff85ac97-43dc-42ba-8b48-c34c0fbe8f89'/>
  </p>
  <p>
    <i>backend source code structure</i>
  </p>
  <p>
    <img src='https://github.com/MinhThanh2404/Dashboard-for-chatbot-and-jobsearch-activities-on-pasona.vn-website/assets/126949248/abf51aa2-0db6-4c62-950e-f30a3643f2e3'/>
  </p>
  <p>
    <i>a part of dashboard_service SQL formation</i>
  </p>
</div>
</ol>

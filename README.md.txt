						OfficeTime
“Be the speed you wish to see in the world”
Darryl Steve Ferdinands, Sheena Gupta, Shivam Tyagi, Tarun Tyagi
San Jose State University
San Jose, CA, USA
darryl.ferdinands@sjsu.edu , shivam.tyagi@sjsu.edu , tarun.tyagi@sjsu.edu , sheena.gupta@sjsu.edu

Abstract
The goal of this article is to present the
information regarding the prediction of the most
appropriate time for a person or an organization
who has employees, who needs to travel daily.
The motivation behind developing this
application is to deliver a feasible and simple
platform for users, which will help to save a lot
of their time. Using this application, a user can
plan his/her schedule before leaving the home
for office or can make the necessary adjustments
in his/her schedule for the day.
Keywords: traffic congestion, office hours
prediction, ford fulkerson algorithm,
dijkstra’s algorithm, graphs.

I. Introduction
In today’s world, the traffic on the roads has
worsened to the heights. This has a huge impact
on the economic growth. People are often late to
work because of traffic congestions. It stresses
people before they reach their destination and
hence, affect their work. Deliveries are late
because of traffic congestion and also, the extra
gas costs money. Unfortunately, most of the
American cities with the worst congestion also
have the largest economies. Due to traffic
congestion, people are not able to calculate their
estimated travel time, due to which they miss
some of their important meetings at office.
According to a research by Matthias Sweet, a
researcher at McMaster University, higher levels
of congestion are initially associated with faster
economic growth. But, above of certain
threshold, congestion starts to become a drag on
the growth. Specifically, congestion seems to
slow job growth when it gets to be worse than
about 35 to 37 hours of delay per commuter per
year (or about four-and-a-half minutes per
one-way trip, relative to free-flowing traffic) [1].
In this project, we have made an effort to build a
prediction system which will help the
organizations and users to plan their schedule in
advance according to the traffic congestion on
the roads.

II. Problem Description
Every metropolitan city faces a big issue: traffic
congestion during rush hours, mostly between 8
AM to 11 AM in the morning and 5 PM to 7 PM
in the evenings. A lot of time of brilliant minds
gets wasted, which they could have used
productively. There is a need of an application
which will analyze the data from traffic sensors
and provide schedules to organizations, which
they can opt as their work timings to reduce this
waste of time of their employees. This
application will serve as a common platform on
which all companies can register to get an
optimized office timing schedule for their
employees.
Fig 2.1 - Money lost due to traffic congestion[3]
Fig 2.2 - Time lost due to traffic congestion[3]

III. Methodology[4]
Prediction of best departure time as per the
needs of the user is at the centre of our project.
If it fails to understand the needs of the user then
it will not be able to provide a significant
recommendation. For this it is must to
understand the traffic flow on different road
sections. We gathered data from California State
Traffic Department which provides a
consolidated section wise data of traffic load on
each section.
The traffic data was in the form of road sections
and traffic load. We extracted this data into data
frames using Python’s Panda Libraries.
Usually the traffic flow can be seen as a
weighted graph. Road sections represented by
edges and intersections by nodes. Thus we used
Dijkstra’s shortest path algorithm to calculate a
path with least cost. Also as more and more user
will direct to path we have recommended, the
dynamics will change. To handle this we have
used Ford Fulkerson maximum flow algorithm.
Using the maximum flow value which tells us
the maximum number of vehicles that can pass
through that section, we control the
recommendations once they near the full
capacity of the route.
As the load of traffic changes the
recommendation given by our algorithm also
changes.
Thus by using the already existing graph
algorithms we can recommend user the best time
on which he should leave for his office to avoid
traffic congestion.
The data extracted by running the python script
on the pandas library of Python was loaded into
NodeJS and then we used the MERN stack to
make our web application for the user to interact
with. We used MongoDB for our Backend,
React for our frontend, Express as the
middleware and Node JS as the Backend.
Fig 3.1 -System Design and Methodology
Next sections talks about all the algorithms that
were used to process the data and derive a
recommendation.

IV. Algorithms
Breadth First Search Algorithm :
Every travelling has two important aspects.
Source and destination and travel time. To travel
from source to destination there needs to exist a
path between them. This is the first step in our
project that when source and destination are
entered by the user into the system, we first need
to determine if a path really exists between
them. Breadth first algorithm traverses a graph
representing a road map. We used BFS to
determine if there exists a path between the
source and destination. If the search produces a
path between source and destination then the
system moves on to next step which is finding
the shortest path between them.
Dijkstra’s Algorithms : Dijkstra’s algorithm
finds the shortest path between source and
destination nodes in a weighted graph. After
BFS finds a valid path, the graph representing
road map is then can be transformed to a
weighted graph with traffic load as the weights
assigned to the edges representing road sections.
Dijkstra’s is a greedy algorithm which on every
step chooses the path with least weight. As the
traffic load varies every hour, so we used
Dijkstra’s to find shortest route in every hour.
Ford Fulkerson Maximum Flow Algorithm : The
Ford–Fulkerson method or Ford–Fulkerson
algorithm (FFA) is an algorithm that computes
the maximum flow in a flow network.. It was
published in 1956 by L. R. Ford, Jr. and D. R.
Fulkerson. The Ford-Fulkerson algorithm deals
with max-flow min-cut problem. It determines
the maximum flow between two nodes in a
weighted graph. That is, given a network with
vertices and edges between those vertices that
have certain weights, how much "flow" can the
network process at a time? The graph is any
representation of a weighted graph where
vertices are connected by edges of specified
weights. There must also be a source vertex and
sink vertex to understand the beginning and end
of the flow network.[5]
V. Use Case and Results
Fig 5.1 -Use Case
We give suggestions to the user based on the
their home address and their company address
and their suggested travel time. The results that
the user gets are an accumulation of all the
techniques we mentioned above in methodology.
We give the user their best travel time and the
route where they would travel with the least
traffic [4]
Fig 5.2 - Results provided to the user

VI. Future Scope
This website currently predicts the time only for
the given source and destination. We can extend
this functionality to accept any source and
destination, which is accepted on the google
maps, and then predict the appropriate time.
Another improvement can include the ability to
upload the traffic data, which will make it easier
for the user to use the website according to their
knowledge.
A final modification includes developing this
website on Android and iOS. This will increase
the availability and convenience of this
application. Users will be able to access this
application within seconds on their mobile
devices.

VII.Conclusion
This project is a very simple, convenient and
helpful website, which is developed as a course
work for CMPE 272 - Enterprise Software
Platforms. This website predicts the best time
for the companies to operate, depending on the
traffic on the roads. It works on a pre-defined
data which includes information about the road
traffic and the user is simply required to select
the route from his place to his office/destination
and the website will predict the most appropriate
hours, which will help the user to save time. The
dynamics change as the traffic is diverted to
recommended path increasing the load on the
route which was having the least load. Our
algorithms handles these changes and
recommendations change as per the current data.
Thus the system adapts with the traffic and thus
is reliable.

VIII. Acknowledgement
The success and the final outcome of this project
required a lot of guidance and support from our
Professor Rakesh Ranjan , who gave us the
opportunity to work on this project and helped
us in every step along the way. He took keen
interest in our project and provided us with the
necessary information for developing a good
project. Without his encouragement and
guidance, this project would not have
materialized.

IX.References
1.
https://www.citylab.com/transportation/2013/10/
how-traffic-congestion-impacts-economic-growt
h/7310/
2.
https://www.virgin.com/disruptors/what-econom
ic-impact-traffic
3.
http://inrix.com/scorecard/
4.
http://www.dot.ca.gov/trafficops/census/
5.
https://en.wikipedia.org/wiki/Ford%E2%80%
93Fulkerson_algorithm
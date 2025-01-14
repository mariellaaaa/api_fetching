import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const LiveArena = () => {
  const [fetchedData, setFetchedData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedSport, setSelectedSport] = useState('all');
  const [selectedFilter, setSelectedFilter] = useState('sport');
  const [selectedDate, setSelectedDate] = useState(new Date('2024-09-07'));
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 900px)").matches);

  useEffect(() => {
    const fetchData = async () => {
      let url = 'https://www.rtl.lu/api/sportstream/livestreams?start_date=2024-09-03&end_date=2024-09-10&source=live-arena';
      if (selectedSport === 'all') {
        url += `&types=football,handball`;
      } else if (selectedSport) {
        url += `&types=${selectedSport}`;
      }
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('API Response:', data); 
        setFetchedData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedSport]);

  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const parsedDate = new Date(date);
    return isNaN(parsedDate.getTime()) ? '' : new Intl.DateTimeFormat('en-GB', options).format(parsedDate).replace(/^(\d{2})/, '$1.');
  };

  const renderDataByOption = () => {
    if (Object.keys(fetchedData).length === 0) return <p>No data available for the selected filter.</p>;
  
    return Object.keys(fetchedData).map((sportType) => (
      <div key={sportType} className="match-header">
        {selectedFilter === 'sport' && (
          <div className="sport-type-div">
            <h2 className="sport-type">{sportType.charAt(0).toUpperCase() + sportType.slice(1)}</h2>
          </div>
        )}
  
        {Object.keys(fetchedData[sportType]).map((competitionKey) => {
          const competitionEntries = fetchedData[sportType][competitionKey]?.entries || {};
  
          return (
            <div key={competitionKey} className="competition-section">
              {selectedFilter === 'sport' && (
                <div className="competition-name">
                  <h3>{fetchedData[sportType][competitionKey].competition.name}</h3>
                </div>
              )}
  
              {Object.keys(competitionEntries).map((date) => {
                const matches = competitionEntries[date] || [];
                if (!Array.isArray(matches)) return null;
  
                return (
                  <div key={date}>
                    {selectedFilter === 'sport' && (
                      <div className="match-date-header">
                        {formatDate(date)}
                      </div>
                    )}
  
                    {matches.map((match, index) => (
                      <div key={index} className="match-row">
                        <div className="match-row-left">
                          <div className="match-time">
                            <div className="match-hour">{match.video.match.hour}</div>
                            <div className="match-date">{new Date(match.video.match.date).toLocaleDateString('en-GB')}</div>
                          </div>
                          <div className='team-image-left'>
                            <img src={match.video.match.home_team.logo_url} alt={match.video.match.home_team.name} width="60" />
                            <div>{isMobile ? match.video.match.home_team.short_name : match.video.match.home_team.name}</div>
                          </div>
                        </div>
                        <div className="match-score">
                          <div className='score'>
                            {match.video.match['home_score']} : {match.video.match['visitor_score']}
                          </div>
                          <div className='play-div'>
                            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 35.53"><rect width="105" height="35.53" fill="#020203"/><rect width="4.58" height="35.53" fill="#cc1127"/><path d="m27,17.83l-7.83-4.52c-.14-.08-.32-.03-.4.1,0,0,0,0,0,0-.03.05-.05.1-.05.16v9c0,.17.13.3.3.31.05,0,.11-.02.15-.05l7.83-4.48c.14-.08.2-.25.12-.39,0,0,0-.01-.01-.02-.02-.05-.06-.09-.11-.12Z" fill="#fff"/><path d="m22.09,10.83c4.02,0,7.27,3.24,7.28,7.26,0,4.02-3.24,7.27-7.26,7.28-4.02,0-7.27-3.24-7.28-7.26,0,0,0,0,0,0,0-4.01,3.24-7.26,7.25-7.27,0,0,0,0,.01,0m0-3.83c-6.13,0-11.1,4.97-11.1,11.1s4.97,11.1,11.1,11.1,11.1-4.97,11.1-11.1-4.97-11.1-11.1-11.1h0Z" fill="#fff"/><path d="m49.07,24.14v.2h-2.76l-3.31-5.2h-2.68v5.2h-2.44v-13.88h5.95c2.78,0,4.56,1.82,4.56,4.28,0,2.04-1.11,3.51-2.86,4.11l3.53,5.29Zm-8.74-11.5v4.32h3.37c1.41,0,2.22-.83,2.22-2.22,0-1.29-.83-2.1-2.22-2.1h-3.37Z" fill="#fff"/><path d="m49.92,19.22c0-3.09,1.88-5.31,5.04-5.31s4.86,2.06,4.86,5v.97h-7.46c0,1.63,1.01,2.7,2.72,2.7,1.11,0,2-.5,2.3-1.37h2.3c-.3,1.98-2.24,3.35-4.6,3.35-3.27,0-5.16-2.24-5.16-5.33Zm7.48-1.01c-.04-1.35-.87-2.32-2.44-2.32s-2.5.97-2.58,2.32h5.02Z" fill="#fff"/><path d="m61.59,27.91v-13.78h2.1l.26,1.19h.08c.67-.91,1.72-1.41,2.99-1.41,2.62,0,4.36,2.14,4.36,5.35s-1.69,5.29-4.3,5.29c-1.29,0-2.36-.5-3.05-1.39h-.08v4.74h-2.36Zm7.42-8.65c0-2.04-.95-3.25-2.52-3.25-1.65,0-2.62,1.25-2.62,3.25s.97,3.17,2.62,3.17,2.52-1.17,2.52-3.17Z" fill="#fff"/><path d="m76.3,24.34c-2.04,0-3.13-.95-3.13-3.03v-10.85h2.36v10.87c0,.69.38,1.03,1.15,1.03h.24v1.98h-.61Z" fill="#fff"/><path d="m77.77,19.2c0-3.23,1.71-5.3,4.32-5.3,1.27,0,2.34.5,3.03,1.41h.08l.28-1.19h2.08v10.21h-2.08l-.28-1.21h-.08c-.67.91-1.7,1.43-2.97,1.43-2.64,0-4.38-2.14-4.38-5.35Zm7.54,0c0-1.98-.97-3.19-2.62-3.19s-2.52,1.19-2.52,3.19.95,3.23,2.52,3.23,2.62-1.23,2.62-3.23Z" fill="#fff"/><path d="m91.37,27.91v-.2l1.15-3.11-3.87-10.27v-.2h2.44l2.6,7.67h.08l2.52-7.67h2.42v.2l-4.94,13.58h-2.4Z" fill="#fff"/></svg>
                          </div>
                        </div>
                        <div className="match-row-right">
                          {isMobile ? (
                            <div className="match-row-right">
                              <div className='team-image-right'>
                                <img src={match.video.match.visitor_team.logo_url} alt={match.video.match.visitor_team.name} width="60" />
                              </div>
                              <div>{match.video.match.visitor_team.short_name}</div>
                            </div>
                          ) : (
                            <>
                              <div>{match.video.match.visitor_team.name}</div>
                              <div className='team-image-right'>
                                <img src={match.video.match.visitor_team.logo_url} alt={match.video.match.visitor_team.name} width="60" />
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    ));
  };
  

  return (
    <div>
      <div className='header-image'>
        <img src='/images/header-image.png' alt='header-image-rtl'/>
      </div>
      <div className='line-1'></div>
      <div className='content-header'>
        <h3>Replay</h3>
        <div className='inputs-div'>
          <div>
            <DatePicker
              id='date-picker'
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd MMMM yyyy"
              isClearable
              placeholderText="Select a date"
            />
          </div>
          <div className='type-filter'>
            <label htmlFor='filter'>Filter by:</label>
            <select id='filter' value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
              <option value='sport'>Sport</option>
              <option value='date'>Date</option>
            </select>
          </div>
          <div className='sport-filter'>
            <label htmlFor='sport'>Sport:</label>
            <select id='sport' value={selectedSport} onChange={(e) => setSelectedSport(e.target.value)}>
              <option value='all'>All</option>
              <option value='football'>Football</option>
              <option value='basketball' disabled>Baskeball</option>
              <option value='handball'>Handball</option>
              <option value='volleyball' disabled>Volleyball</option>
              <option value='cycling' disabled>Cycling</option>
            </select>
          </div>
        </div>
      </div>
  
      {loading ? <p>Loading...</p> : renderDataByOption()}
    </div>
  );  
};

export default LiveArena;

















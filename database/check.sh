rm md5sum
find bible/ -type f | xargs md5sum > md5sum
find lemme/ -type f | xargs md5sum >> md5sum
find verbes/ -type f | xargs md5sum >> md5sum

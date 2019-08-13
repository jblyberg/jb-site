<template>
  <div class="row justify-around resume-section">
    <div class="col-11 col-md-1 resume-section-header">
      <span>
        <h5>Experience</h5>
      </span>
    </div>
    <div class="col-11 col-md-9">
      <q-list dark>
        <q-item>
          <q-item-section>
            <q-item-label class="resume-subsection-header"
              >Self Employed
              <span class="resume-right"><em>Lexington, KY</em></span>
            </q-item-label>
            <q-item-label>
              Library Consultant &amp; Freelance Developer
              <span class="resume-right">2018 - Present</span>
            </q-item-label>

            <q-item-label class="resume-job-description">
              <q-list dark dense class="resume-duties-list">
                <q-item>
                  <q-item-section>
                    I provide a wide-range of technical expertise to clients,
                    specializing in libraries and non-profits.
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    I am also currently working on a library software start-up.
                  </q-item-section>
                </q-item>
              </q-list>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label class="resume-subsection-header"
              >Darien Library
              <span class="resume-right"><em>Darien, CT</em></span>
            </q-item-label>
            <q-item-label>
              Assistant Director
              <span class="resume-right">2017 - 2018</span>
            </q-item-label>
            <q-item-label>
              Assistant Director for Innovation and User Experience
              <span class="resume-right">2008 - 2017</span>
            </q-item-label>
            <q-item-label>
              Head of Technology and Digital Initiatives
              <span class="resume-right">2007 - 2008</span>
            </q-item-label>
            <q-item-label class="resume-job-description">
              <q-list dark dense class="resume-duties-list">
                <q-item>
                  <q-item-section>
                    Re-built the Library’s technology program from the ground
                    up, forming the the first-ever public library UX department
                    in the process.
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    designed and developed two iterations of an award-winning
                    library website and catalog system (SOPAC v2 &amp; v3).
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    dplanned and implemented technology for a $28 million
                    building project.
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    During my tenure, I also oversaw teen, reference, facilities
                    and technical services departments.
                  </q-item-section>
                </q-item>
              </q-list>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label class="resume-subsection-header"
              >Ann Arbor District Library
              <span class="resume-right"><em>Ann Arbor, MI</em></span>
            </q-item-label>
            <q-item-label>
              Systems Administrator &amp; Lead Developer
              <span class="resume-right">2005 - 2007</span>
            </q-item-label>
            <q-item-label>
              Network Administrator
              <span class="resume-right">2002 - 2005</span>
            </q-item-label>

            <q-item-label class="resume-job-description">
              <q-list dark dense class="resume-duties-list">
                <q-item>
                  <q-item-section>
                    Developed a public PC session management system.
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    Transitioned the Library website to Drupal and developed the
                    first library catalog front-end to incorporate user
                    generated content and metadata (SOPAC v1).
                  </q-item-section>
                </q-item>
              </q-list>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label class="resume-subsection-header"
              >Lotus Engineering
              <span class="resume-right"><em>Ann Arbor, MI</em></span>
            </q-item-label>
            <q-item-label>
              Manager of Information Technology
              <span class="resume-right">2001 - 2002</span>
            </q-item-label>
            <q-item-label>
              Network Technician
              <span class="resume-right">1999 - 2001</span>
            </q-item-label>

            <q-item-label class="resume-job-description">
              <q-list dark dense class="resume-duties-list">
                <q-item>
                  <q-item-section>
                    Developed a web-based Avoid Verbal Orders (AVO) system for
                    ISO 9001 compliance.
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    Developed an automated data capture system for engine and
                    transmission testbeds.
                  </q-item-section>
                </q-item>
              </q-list>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.resume-job-description {
  margin-top: 20px;
}

.resume-duties-list {
  .q-item {
    padding-left: 0px;
    color: #c2c2c2;
  }
}
</style>
